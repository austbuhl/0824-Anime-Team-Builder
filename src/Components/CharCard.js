import React from 'react'

const CharCard = ( props ) => {

  const clickHandler = () => {
    props.clickHandler(props.character)
  }
  return (
    <div className="card" onClick={clickHandler}>
      <h3>{props.character.name}</h3>
      <img alt="" src={props.character.img}/>
      <h3>{props.character.show}</h3>
    </div>

  )
}

export default CharCard