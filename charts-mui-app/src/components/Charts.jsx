import React from 'react'
import BarApache from './BarApache'
import BarDevEx from './BarDevEx'
import BarMui from './BarMui'
import LineApache from './LineApache'
import LineDevEx from './LineDevEx'
import LineMui from './LineMui'
import PieApache from './PieApache'
import PieMui from './PieMui'

function Charts() {
  return (
    <div>
    <div style={{ display: "flex", flexDirection: "row", justifyContent:"space-around", alignItems: "center", marginTop: "2rem"}}>
        <BarApache/>
        <BarDevEx/>
        <BarMui/>
    </div>
    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center", marginTop: "8rem"}}>
        <LineApache/>
        <LineDevEx/>
        <LineMui/>
    </div>
    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center", marginTop: "8rem"}}>
        <PieApache/>
        <PieMui/>
    </div>
    </div>
  )
}

export default Charts