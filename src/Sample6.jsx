import React from 'react'

const Sample6 = ({car}) => {
   
  switch (car) {
    case 1:
        return (
            <div>
                <h1>Ferrari is good car</h1>
                <img src="https://stimg.cardekho.com/images/carexteriorimages/630x420/Ferrari/F8-Tributo/7945/1598599471404/front-left-side-47.jpg?tr=w-664" height={400} width={400}></img>
            </div>
            )      
            break;
    case 2:
        return (
            <div>
                <h1>BMW is good car</h1>
                <img src="https://media.zigcdn.com/media/model/2023/Jan/x7-1.jpg" height={400} width={400}></img>
            </div>
            )
        break;
  
    default:
        return <h1>Not at all good car</h1>
        break;
  }
}

export default Sample6