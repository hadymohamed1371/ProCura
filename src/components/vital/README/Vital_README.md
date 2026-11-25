# Vital.jsx

## Folder Structure

```text
src/
└── components/
    └── vital/
        ├── components/
        │   └── Vital.jsx
        ├── stylesheets/
        │   └── Vital.css
        └── README/
            └── Vital_README.md
```

Vital is a self-closing component that provides a visual representation of the measured health aspect, with an optional normal range representation.

## Basic Usage

```jsx
import Vital from './components/vital/components/Vital'

function Example() {
    return (
        <Vital 
        value={"37.4"}
        unit={"°C"}
        normalMin={"36"}
        normalMax={"38"}
        />
    );
}
```

## Props

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `value` | `string` | — | Yes | The value to be displayed. |
| `unit` | `string` | — | Yes | The unit that the value was measured in. |
| `normalMin` | `string` | — | No | The normal/safe minimum of the measured value. |
| `normalMax` | `string` | — | No | The normal/safe maximum of the measured value. |

## Examples / Variations
```jsx
    // A vital with a normal/safe range.
    <Vital 
    value={"37.4"}
    unit={"°C"}
    normalMin={"36"}
    normalMax={"38"}
    />

    // A vital with a normal/safe minimum.
    <Vital 
    value={"37.4"}
    unit={"°C"}
    normalMin={"36"}
    />

    // A vital with a normal/safe maximum.
    <Vital 
    value={"37.4"}
    unit={"°C"}
    normalMax={"38"}
    />

    // A vital without a normal/safe range.
    <Vital 
    value={"37.4"}
    unit={"°C"}
    />
```

## Notes & Caveats

### Supported Cases
- `value` and `unit` are required for the displayed measurement.
- Supply both `normalMin` and `normalMax` to display a normal range.
- Supply only `normalMin` to display a normal minimum.
- Supply only `normalMax` to display a normal maximum.
- Omit both range props to display the measurement without a normal range.

### Caveats
- The component displays the supplied values; it does not check whether `value` is within the normal range or determine a health status.
- The `unit` is displayed beside the measured value and appended to the normal-range text.
- Avoid passing numeric `0` directly to `normalMin` and `normalMax` because it will be treated as absent; pass `"0"` if zero is a valid boundary.
- Vital displays supplied values without parsing or validating them against the range.
