import React, {useState} from "react"
import PropTypes from 'prop-types';

const Light = (props) =>{
    const {initialColor, currentColor , isActive} = props

    let [activeLight,setActiveLight] = useState(isActive)

    const handleLight = (state) =>{
        setActiveLight(state)
    }

    const checkLight = (color1, color2) =>{
        if(color1 === color2){
            handleLight(true)
        } else if (color1 !== color2){
            handleLight(false)
        }
    }

    () => checkLight(initialColor, currentColor)
    return(
        <>
         <div onClick={() => handleLight(activeLight === true ? false : true)} className={`${initialColor} light ${activeLight || initialColor == currentColor ? "active" : ""} `}></div>
        </>
    )
}

Light.propTypes = {
    initialColor: PropTypes.string,
    isActive: PropTypes.bool
}

export default Light;