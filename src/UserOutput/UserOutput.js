import React from 'react'

const userInput = (props) => {
  return ( 
   <p onClick = {props.onPress} > 
    I 'm {props.name}, I am {props.age} years old! 
  </p> 
  <p> { props.children} </ p>
  )
}

export default userInput