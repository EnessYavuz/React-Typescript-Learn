import React from 'react'

type dataType = {
    name:string,
    surname:string,
    age:number,
    askerlik:boolean
}

function Home(props:dataType) {
  return (
    <div>
      hello  close friend 
      <br />
      MY name is {props.name}
      <br />
      my surname is {props.surname}
      <br />
      ı {props.age} years old
      <br />
      my military status {props.askerlik}
    </div>
  )
}

export default Home
