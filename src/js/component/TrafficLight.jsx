import React, {useState} from "react";
import PropTypes from 'prop-types';

import Light from "./Light.jsx"


const TrafficLight = () =>{
    let [currentColor,setCurrentColor] = useState("red")
    let [iterador, setIterador] = useState(0)
    let [isVisible, setVisibility] = useState(false)

    let colors = ["red", "yellow", "green", "purple"]

    // let lightProps = 
    // [
    //     {color: "red", active: false},
    //     {color: "yellow", active: false},
    //     {color: "green", active: false}
    // ]

    // let lights = lightProps.map( (element, index) =>{
    //     <Light key={index} color={element.color} isActive={element.active}/>
    // })

    const cycleLights = () =>{
        if(iterador == colors.length){
            setIterador(0)
            setCurrentColor(colors[iterador])
        }else {
            console.log(iterador)
            setCurrentColor(colors[iterador])
            setIterador(iterador + 1)
        }  
    }

    const makePurpleButton = () =>{
        if(isVisible === true){
            setVisibility(false) 
        }else if(isVisible === false){
            setVisibility(true) 
        }
        console.log("works?")
    }

    return(
        <>
        <div className="container m-auto d-flex flex-column align-items-center">
                <div className="bg-dark d-flex semaforo-columna" ></div>
                <div className="semaforo bg-dark d-flex flex-column align-items-center" >
                    {/* <div onClick={() => handleLight("red")} className={`red light ${activeLight === "red" ? "active" : ""} `}></div>
                    <div onClick={() => handleLight("yellow")} className={`yellow light ${activeLight === "yellow" ? "active" : ""} `}></div>
                    <div onClick={() => handleLight("green")} className={`green light ${activeLight === "green" ? "active" : ""} `}></div> */}
                    
                    <Light initialColor="red" currentColor={currentColor} isActive={false}/>
                    <Light initialColor="yellow" currentColor={currentColor} isActive={false}/>
                    <Light initialColor="green" currentColor={currentColor} isActive={false}/>
                    <div className={`${isVisible ? "visible": "invisible"}`}>
                    <Light initialColor="purple" currentColor={currentColor} isActive={false}/>
                    </div>
                </div>
                <button onClick={cycleLights} type="button" className="btn btn-primary my-2">
                    Cambie de color
                </button>
                <button onClick={makePurpleButton} type="button" className="btn btn-primary my-2">
                    Luz Purpura
                </button>
		</div>

        </>
    )
}

export default TrafficLight;