import React from 'react'
import './navbar.css'

function navbar(props) {
  return (
    <div id="n">
        <ul>
            <li><a href="http://">{props.li[0]}</a></li>
            <li><a href="http://">{props.li[1]}</a></li>
            <li><a href="http://">{props.li[2]}</a></li>
        </ul>
    </div>
  )
}

export default navbar