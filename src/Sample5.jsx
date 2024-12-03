import React from 'react'

const Sample5 = () => {
  let food='4'
  
  if (food=='1') {
    return <h1>It is vada-pav <img src="https://www.cookwithmanali.com/wp-content/uploads/2018/04/Vada-Pav-500x375.jpg"
     height={400} width={400}></img></h1>
  }
  else if (food=='2') {
    return <h1>It is Pav-bhaji <img src="https://www.ticklingpalates.com/wp-content/uploads/2021/08/Instant-Pot-Pav-Bhaji-Recipe.jpg"
     height={400} width={400}></img></h1>
  }
  else if (food=='3') {
    return <h1>It is Paani-puri <img src="https://i.ytimg.com/vi/VC8baS9vPeg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAA
    DIQj0AgKJD&rs=AOn4CLAQ9wN0yq--CtsEMmObevwOOlgK8A" height={400} width={400}></img></h1>
  }
  else {
    return <h1>Sorry only upma is availble now <img src="https://www.indianhealthyrecipes.com/wp-content/uploads/2024/07/upma-recipe.jpg"
     height={400} width={400}></img></h1>  }
}
export default Sample5