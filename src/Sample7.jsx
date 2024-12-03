import React from 'react'
import bmw from "./assets/bmw.jpeg"
import ferrari from "./assets/lafarari.jpg"

const Sample7 = ({car}) => {
    switch (car) {
        case 1:
            return (
                <div>
                    <h1>Ferrari is good car</h1>
                    <img src={ferrari} height={400} width={400}></img>
                </div>
                )      
             break;
        case 2:
            return (
                <div>
                    <h1>BMW is good car</h1>
                    <img src={bmw} height={400} width={400}></img>
                </div>
                )
            break;
      
        default:
            return <h1>Not at all good car</h1>
            break;
      }
}

export default Sample7