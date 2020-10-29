import React from 'react'
import CharCard from '../Components/CharCard'
import { api } from '../api'
import CreateChar from '../Components/CreateChar'

class CharContainer extends React.Component {

  state = {
    api
  }

  submitHandler = (newCharacter) => {
    this.setState((prevState) => ({api: [newCharacter, ...prevState.api]}) )
  }

  renderCharacters = () => {
    return this.state.api.map( char => <CharCard key={char.name} character={char} clickHandler={this.props.clickHandler}/>)
  }

  render() {
    return(
      <div>
        <h2>All Characters</h2>
        <CreateChar submitHandler={this.submitHandler}/>
        <div id="char-container">
          {this.renderCharacters()}
        </div>
      </div>
    )

  }

}

export default CharContainer