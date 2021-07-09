import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      result: ''
    }
  }
  onSubmit = (e) => {
    try {

      fetch('https://middle-ware-app.herokuapp.com/api/submitContact', {
        method: 'POST',
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: this.state.name,
          email: this.state.email
        }),
        async: false
      })
        .then((response) => (response.json())
          .then(json => {
            if (json !== undefined) {
              //this.props.history.push('/');
              this.setState({
                result: "This is " + json.name
              })
            }
          })).catch(err => {
            console.log(err)
          });

    }
    catch (error) {
      console.log(error);
    }

  }

  ontxtChange = () => {
    this.setState({
      name: document.getElementsByClassName("name")[0].value,
      email: document.getElementsByClassName("email")[0].value
    });
  }
  render() {
    return (
      <div className="App">
        
          <h1>Contact</h1>
          <input placeholder="Enter Name" type="name" className="name" onChange={this.ontxtChange} /><br />
          <input placeholder="Enter EmailId" type="email" className="email" onChange={this.ontxtChange} /><br />
          <button onClick={this.onSubmit}>Submit</button>
          <p>{this.state.result}</p>
      </div>
    )
  }

}

export default App;
