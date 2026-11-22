import React, { useState } from "react";
import "./Units.css";

function Units() {
  const [unitSystem, setUnitSystem] = useState("Metric");
  const [heartRateUnit, setHeartRateUnit] = useState("npm");
  const [bloodPressureUnit, setBloodPressureUnit] = useState("mmHg");
  const [bloodGlucoseUnit, setBloodGlucoseUnit] = useState("mg/dL");

  const isMetric = unitSystem === "Metric";
  const heightUnit = isMetric ? "cm" : "ft / in";
  const weightUnit = isMetric ? "kg" : "lbs";

  return (
    <section className="units-container" aria-label="Units">
      <h2 className="units-title">Units</h2>

      {/* Unit System Row */}
      <div className="units-system-header">
        <label htmlFor="units-system-select" className="units-label">
          Unit System:
        </label>

        <div className="units-system-control">
          <select
            id="units-system-select"
            className="units-select units-select-wide"
            value={unitSystem}
            onChange={(e) => setUnitSystem(e.target.value)}
          >
            <option value="Metric">Metric</option>
            <option value="Imperial">Imperial</option>
          </select>
        </div>
      </div>

      {/* Helper Description */}
      <p className="units-description">
        The metric system uses centimeters for height and kilograms for weight.
        <br />
        The imperial system uses feet and inches for height and pounds for weight.
      </p>

      {/* Current System Units Summary */}
      <div className="units-current-summary">
        <span className="units-current-heading">Current system units:</span>
        <div className="units-current-values">
          <div className="units-current-item">
            <span className="units-current-key">Height unit:</span>{" "}
            <span className="units-current-val">{heightUnit}</span>
          </div>
          <div className="units-current-item">
            <span className="units-current-key">Weight unit:</span>{" "}
            <span className="units-current-val">{weightUnit}</span>
          </div>
        </div>
      </div>

      {/* Vital Signs Units List */}
      <div className="units-vitals-list">
        <div className="units-vital-row">
          <label htmlFor="units-heart-rate-select" className="units-label">
            Heart rate unit:
          </label>
          <select
            id="units-heart-rate-select"
            className="units-select units-select-compact"
            value={heartRateUnit}
            onChange={(e) => setHeartRateUnit(e.target.value)}
          >
            <option value="npm">npm</option>
            <option value="bpm">bpm</option>
          </select>
        </div>

        <div className="units-vital-row">
          <label htmlFor="units-blood-pressure-select" className="units-label">
            Blood pressure unit:
          </label>
          <select
            id="units-blood-pressure-select"
            className="units-select units-select-compact"
            value={bloodPressureUnit}
            onChange={(e) => setBloodPressureUnit(e.target.value)}
          >
            <option value="mmHg">mmHg</option>
            <option value="kPa">kPa</option>
          </select>
        </div>

        <div className="units-vital-row">
          <label htmlFor="units-blood-glucose-select" className="units-label">
            Blood glucose unit:
          </label>
          <select
            id="units-blood-glucose-select"
            className="units-select units-select-compact"
            value={bloodGlucoseUnit}
            onChange={(e) => setBloodGlucoseUnit(e.target.value)}
          >
            <option value="mg/dL">mg/dL</option>
            <option value="mmol/L">mmol/L</option>
          </select>
        </div>
      </div>
    </section>
  );
}

export default Units;