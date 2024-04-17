"use client";

// withTranslations.js
import React, { useState, useEffect } from "react";
import initTranslations from "../i18n";

const i18nNamespaces = ["home", "common"];

export default function withTranslations(WrappedComponent: any) {
  return function TranslationsComponent({ locale, ...props }: any) {
    const [translationsLoaded, setTranslationsLoaded] = useState(false);

    useEffect(() => {
      const loadTranslations = async () => {
        await initTranslations(locale, i18nNamespaces);
        setTranslationsLoaded(true);
      };

      loadTranslations();
    }, [locale]);

    if (!translationsLoaded) {
      return <div>Loading...</div>; // Or a loading spinner
    }

    return <WrappedComponent {...props} />;
  };
}
