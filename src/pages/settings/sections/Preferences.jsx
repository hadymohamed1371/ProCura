import React, { useState } from "react";
import "./Preferences.css";

function Preferences() {
  const [language, setLanguage] = useState("English");
  const [theme, setTheme] = useState("Light");

  return (
    <section className="preferences-container" aria-label="Preferences">
      <h2 className="preferences-title">Preferences</h2>

      <div className="preferences-list">
        
        {/* Language Row */}
        <div className="preferences-row">
          <div className="preferences-label-group">
            <span className="preferences-icon" aria-hidden="true">

              {/* Globe Icon */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle
                  cx="12"
                  cy="12"
                  r="9.5"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <ellipse
                  cx="12"
                  cy="12"
                  rx="4.2"
                  ry="9.5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />
                <line
                  x1="3"
                  y1="12"
                  x2="21"
                  y2="12"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />
              </svg>
            </span>
            <label htmlFor="preferences-language-select" className="preferences-label">
              Language
            </label>
          </div>

          <div className="preferences-control">
            <select
              id="preferences-language-select"
              className="preferences-select"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value="English">English</option>
              <option value="Arabic">العربية</option>
            </select>
          </div>
        </div>

        {/* Theme Row */}
        <div className="preferences-row">
          <div className="preferences-label-group">
            <span className="preferences-icon" aria-hidden="true">
              {/* Sun Icon */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle
                  cx="12"
                  cy="12"
                  r="4.2"
                  stroke="currentColor"
                  strokeWidth="2.2"
                />
                <path
                  d="M12 2.5V5.2M12 18.8V21.5M2.5 12H5.2M18.8 12H21.5M5.28 5.28L7.19 7.19M16.81 16.81L18.72 18.72M18.72 5.28L16.81 7.19M7.19 16.81L5.28 18.72"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <label htmlFor="preferences-theme-select" className="preferences-label">
              Theme
            </label>
          </div>

          <div className="preferences-control">
            <select
              id="preferences-theme-select"
              className="preferences-select"
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
            >
              <option value="Light">Light</option>
              <option value="Dark">Dark</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Preferences;