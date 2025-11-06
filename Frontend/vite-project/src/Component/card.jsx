import React from 'react'
import './card.css'


function card(props) {
  return (
    <div id="r">
        <img src="" alt="" />
        <h1>{props.name}</h1>
        <h3>Persuing {props.Education}</h3>
    </div>
  )
}

export default card