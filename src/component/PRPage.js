import React from 'react'
import MydModalWithGrid from './Modal'

export default function PRPage() {
    
    return (
        <div>
        <MydModalWithGrid show={true} onHide={() => console.log("")}/> 
        </div>
    )
}
