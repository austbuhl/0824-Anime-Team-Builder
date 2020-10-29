import React from 'react'

class CreateChar extends React.Component {

  state={
    name: "",
    img: "",
    show: ""
  }

  changeHandler = e => {
    e.preventDefault()
    this.setState({ [e.target.name]: e.target.value} )
  }

  submitHandler = e => {
    e.preventDefault()
    this.props.submitHandler(this.state)
    this.setState({name: "", img: "", show: ""} )
  }


  render(){
    return(
      <form onChange={this.changeHandler} onSubmit={this.submitHandler}>
        <input name="name" type="text" placeholder="enter name" value={this.state.name} />
        <input name="img" type="text" placeholder="enter img" value={this.state.img} />
        <input name="show" type="text" placeholder="enter show" value={this.state.show} />
        <button>Create Character</button>
      </form>
    )
  }

}

export default CreateChar