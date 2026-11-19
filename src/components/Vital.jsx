import React from 'react'

import './Vital.css'

export default function Vital({value, unit, normalRange}) {
  return (
    <div className='vital-content'>

        <div className="vital-value">
            <p className="value">{value}</p>
            <p className="unit">{unit}</p>
        </div>

        <div className="normal-range">
            <p className="">
                Normal range:
            </p>
            <p className="">
                {normalRange}
            </p>
        </div>

    </div>
  )
}
