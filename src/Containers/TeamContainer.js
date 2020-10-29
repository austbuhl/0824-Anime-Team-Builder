import React from 'react'
import CharCard from '../Components/CharCard'

const TeamContainer = (props) => {
  
  const renderCharacters = () => {
    return props.team.map( char => <CharCard key={char.name} character={char} clickHandler={props.clickHandler}/>)
  }

  return(
    <div>
      <h2>My Team</h2>
      <div>
        {renderCharacters()}
      </div>
    </div>
  )
}

export default TeamContainer