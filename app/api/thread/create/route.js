import { NextResponse } from "next/server";
import { createThread } from "../../../utils/OpenAi";

//create new thread
export async function POST(req) {
  try {
    let newThread = await createThread();

    return NextResponse.json(newThread);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
