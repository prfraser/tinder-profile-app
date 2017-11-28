import React, { Component } from 'react';
import './App.css';
import Profile from './components/profile'

const EditForm = ({ firstName, lastName, onChange, onClickLike }) => (
  <div className="edit-form">
    <button onClick={onClickLike}>Like!</button>
    <label>
      First Name:
      <input value={firstName} name="firstName" onChange={onChange} />
    </label>
    <label>
      Last Name:
      <input value={lastName} name="lastName" onChange={onChange} />
    </label>
  </div>
)

class App extends Component {

  state = {
    firstName: "John",
    lastName: "Doe",
    imgUrl: "https://randomuser.me/api/portraits/men/64.jpg",
    likes: 0,
    display: false
  }

  onChange = (event) => {
    this.setState({
      [ event.target.name ]: event.target.value
    });
  }

  onClickLike = () => {
    this.setState(prevState => ({
      likes: ++prevState.likes
    }));
  }

  onClickEdit = () => {
    this.setState({
      display: !this.state.display
    })
  }

  onClickRandom = () => {
    fetch('https://randomuser.me/api/').then((results) => {
      return results.json()
    }).then((data) => {
      const randomFirstName = data.results[0].name.first;
      const randomLastName = data.results[0].name.last;
      const randomPicture = data.results[0].picture.large;
      this.setState({
        firstName: randomFirstName,
        lastName: randomLastName,
        imgUrl: randomPicture
      })
    })
  }

  render() {

    let { firstName, lastName, imgUrl, likes, display } = this.state;

    return (
      <div className="App">
        <Profile 
          firstName={ firstName } 
          lastName={ lastName }
          imgUrl={ imgUrl }
          likes={ likes } />
        <div className="two-buttons">
          <button onClick={this.onClickEdit}>Edit</button>
          <button onClick={this.onClickRandom}>Random</button>
        </div>
        {(display) ? 
          <EditForm 
            firstName={ firstName } 
            lastName={ lastName }
            onChange={this.onChange}
            onClickLike={this.onClickLike} /> : ''}
      </div>
    );
  }
}

export default App;
