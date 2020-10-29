import logo from './logo.svg';
import React from 'react'
import './App.css';
import CharContainer from './Containers/CharContainer'
import TeamContainer from './Containers/TeamContainer'

class App extends React.Component {

  state = {
    team: []
  }

  addToTeam = addCharacter => {
    if(this.state.team.includes(addCharacter)) return

    let updatedTeam = [...this.state.team, addCharacter]
    this.setState(() => ({team: updatedTeam}))
  }

  removeFromTeam = removeCharacter => {
    let updatedTeam = this.state.team.filter( char => char !== removeCharacter)
    this.setState(() => ({team: updatedTeam}))

  }

  render(){
    return (
    <div>
      <TeamContainer clickHandler={this.removeFromTeam} team={this.state.team}/>
      <CharContainer clickHandler={this.addToTeam}/>
    </div>
  )}
}

export default App;
