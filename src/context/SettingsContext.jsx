import React, { createContext, useContext, useEffect, useState } from "react";

const SettingsContext = createContext(null);

const STORAGE_KEYS = {
  language: "procura_language",
  theme: "procura_theme",
  units: "procura_units",
};

const DEFAULT_UNITS = {
  unitSystem: "Metric",
  heartRateUnit: "bpm",
  bloodPressureUnit: "mmHg",
  bloodGlucoseUnit: "mg/dL",
};

function readFromStorage(key, fallback) {
  try {
    const saved = window.localStorage.getItem(key);
    return saved !== null ? saved : fallback;
  } catch {
    return fallback;
  }
}

function readUnitsFromStorage() {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEYS.units);
    if (!saved) return DEFAULT_UNITS;
    const parsed = JSON.parse(saved);
    return { ...DEFAULT_UNITS, ...parsed };
  } catch {
    return DEFAULT_UNITS;
  }
}

export function SettingsProvider({ children }) {
  const [language, setLanguage] = useState(() =>
    readFromStorage(STORAGE_KEYS.language, "English")
  );
  const [theme, setTheme] = useState(() =>
    readFromStorage(STORAGE_KEYS.theme, "Light")
  );
  const [units, setUnits] = useState(readUnitsFromStorage);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEYS.language, language);
      const isArabic = language === "Arabic";
      document.documentElement.lang = isArabic ? "ar" : "en";
      document.documentElement.dir = isArabic ? "rtl" : "ltr";
    } catch {}
  }, [language]);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEYS.theme, theme);
      document.documentElement.setAttribute("data-theme", theme.toLowerCase());
    } catch {}
  }, [theme]);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEYS.units, JSON.stringify(units));
    } catch {}
  }, [units]);

  const updateUnit = (key, value) => {
    setUnits((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <SettingsContext.Provider
      value={{
        language,
        setLanguage,
        theme,
        setTheme,
        units,
        setUnits,
        updateUnit,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  const context = useContext(SettingsContext);
  if (context) return context;

  // Fallback آمن مؤقتاً لو App.jsx لسه متلفش بـ SettingsProvider
  return {
    language: readFromStorage(STORAGE_KEYS.language, "English"),
    setLanguage: (val) => {
      window.localStorage.setItem(STORAGE_KEYS.language, val);
      const isArabic = val === "Arabic";
      document.documentElement.lang = isArabic ? "ar" : "en";
      document.documentElement.dir = isArabic ? "rtl" : "ltr";
    },
    theme: readFromStorage(STORAGE_KEYS.theme, "Light"),
    setTheme: (val) => {
      window.localStorage.setItem(STORAGE_KEYS.theme, val);
      document.documentElement.setAttribute("data-theme", val.toLowerCase());
    },
    units: readUnitsFromStorage(),
    setUnits: (nextUnits) => {
      window.localStorage.setItem(STORAGE_KEYS.units, JSON.stringify(nextUnits));
    },
    updateUnit: (key, value) => {
      const current = readUnitsFromStorage();
      const updated = { ...current, [key]: value };
      window.localStorage.setItem(STORAGE_KEYS.units, JSON.stringify(updated));
    },
  };
}