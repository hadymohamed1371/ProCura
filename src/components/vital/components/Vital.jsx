import React from 'react'

import '../stylesheets/Vital.css'

export default function Vital({value, unit, normalMin, normalMax}) {
  return (
    <div className='vital-content'>

        <div className="vital-value">
            <p className="value">{value}</p>
            <p className="unit">{unit}</p>
        </div>

        {normalMin && normalMax &&
            <div className="normal-range">
            <p className="">
                Normal range:
            </p>
            <p className="">
                {normalMin} - {normalMax} {unit}
            </p>
        </div>
        }
        {normalMin && !normalMax &&
            <div className="normal-range">
            <p className="">
                Normal minimum:
            </p>
            <p className="">
                {normalMin} {unit}
            </p>
        </div>
        }
        {!normalMin && normalMax &&
            <div className="normal-range">
            <p className="">
                Normal maximum:
            </p>
            <p className="">
                {normalMax} {unit}
            </p>
        </div>
        }

    </div>
  )
}
