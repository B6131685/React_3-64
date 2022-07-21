import React from 'react'
import useHover from '../hooks/UseHover'

function Menu() {

    const [hover, mouseOver, mousOut] = useHover();

    return (
    <div>
        <div>
            menu
        </div>
        <div>
            {hover ? <span>hover work</span> : null}
        </div>

        <div>
            <img src='./logo192.png'  onMouseOver={mouseOver} onMouseOut={mousOut}  />
        </div>
    </div>
  )
}

export default Menu