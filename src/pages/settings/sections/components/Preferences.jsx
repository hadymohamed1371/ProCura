import Section from "../../../../components/section/Section";
import Language_icon from "../../../../assets/icons/Language_icon.svg";
import Icon_sun from "../../../../assets/icons/Icon_sun.svg";
import { useSettings } from "../../../../context/SettingsContext";
import "../stylesheets/Preferences.css";
function Preferences() {
  const { language, setLanguage, theme, setTheme } = useSettings();

  return (
    <Section title="Preferences">
      <div className="preferences-list">
        {/* Language Row */}
        <div className="preferences-row">
          <div className="preferences-label-group">
            <img
              src={Language_icon}
              alt=""
              aria-hidden="true"
              className="preferences-icon"
            />
            <label
              htmlFor="preferences-language-select"
              className="preferences-label"
            >
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
            <img
              src={Icon_sun}
              alt=""
              aria-hidden="true"
              className="preferences-icon"
            />
            <label
              htmlFor="preferences-theme-select"
              className="preferences-label"
            >
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
    </Section>
  );
}

export default Preferences;