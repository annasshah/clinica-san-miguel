// pages/api/translate.js
import { NextResponse } from "next/server";
const translate = require('google-translate-api-x');

export default async function Post(text) {
  
    try {
      const translatedText = await translate(text, { to:'en' });
      return NextResponse.json({ translatedText: translatedText });
    } catch (error) {
      console.error('Translation error:', error);
      return NextResponse.json({ translatedText: 'error' });
    }

}
