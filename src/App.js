import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

// Create TWO new components: UserInput and UserOutput
// UserInput should hold an input element, UserOutput two paragraphs
// Output multiple UserOutput components in the App component(any paragraph texts of your choice)
// Pass a username( of your choice) to UserOutput via props and display it there
// Add state to the App component( => the username) and pass the username to the UserOutput component
// Add a method to manipulate the state( => an event - handler method)
// Pass the event - handler method reference to the UserInput component and bind it to the input - change event
// Ensure that the new input entered by the user overwrites the old username passed to UserOutput
// Add two - way - binding to your input( in UserInput) to also display the starting username
// Add styling of your choice to your components / elements in the components - both with inline styles and stylesheets

class App extends Component {
  state = {
    persons: [
      { 
        name: 'Arnold', 
        age: 30,
        id:'adsafddfas'
      },
      {
        name: 'Jenny',
        age: 27,
        id:'lifwe'
      },
      {
        name: 'Jason',
        age: 27,
        id:'lkjfwlji'
      },
    ],
    showPeople: true, 
    otherState:'Other values'
  }

  togglePersonHandler = () => {
    this.setState({
      showPeople: !this.state.showPeople
    })
  }
  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons:persons})
  }
  inputNameHandler = (event, id) => {
    //this returns the whole object from the persons array
    const personIndex = this.state.persons.find((p => {
      return p.id === id;
    }))
    const person = {
      ...this.state.persons[personIndex]
    } 
    person.name = event.target.value;
    const persons = [this.state.persons];
    persons[personIndex] = person;
  }
  render() {
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?') )
    const buttonStyles = {
      backgroundColor: 'green',
      font : 'inherit',
      border: '1px solid blue',
      badding: '8px',
      cursor: 'pointer', 
    }
    let persons = null;

    if(this.state.showPeople){
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={ () => this.deletePersonHandler(index) }
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.inputNameHandler(event, person.id)}
            ></Person>
          })}
        </div> 
      )
      buttonStyles.backgroundColor = "red";
    }
    const classes = [];
    if(this.state.persons.length <= 2){
      classes.push('red');
    }
    if(this.state.persons.length <= 1){
      classes.push('bold');
    }

    return (
        <div className="App">
          <header className="App-header">
            <h1>
              Hi I'm a react app!
            </h1>
            <p className={classes.join(' ')}>Word?!?!</p> 
            <button 
              style = { buttonStyles}
              onClick={this.togglePersonHandler}> Toggle People 
            </button>
            {persons}
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn this shit
            </a>
          </header>
        </div> 
    );
  }
}

export default App;
