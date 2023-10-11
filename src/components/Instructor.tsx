import React from 'react'

type comingPros ={

    nesne :{
        firstName:string,
        lastName:string
    }

   
}

function Instructor(props:comingPros) {

  return (
    <div>
      meraba {props.nesne.firstName}
    </div>
  )
}

export default Instructor
