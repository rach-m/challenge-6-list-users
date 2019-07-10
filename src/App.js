import React, { Component } from 'react';
import './styles/App.css';
import './styles/userList.css';
import Header from './components/Header';
import PersonList from './components/PersonList';
import axios from 'axios';

class App extends Component {
    state = {
        people: []
    };
    async componentDidMount(){
        let data = await axios.get('https://randomuser.me/api/?results=20');
        this.setState({
            people: data.data.results
        });
    }

    render() {
        // console.log(this.state.people);
        return (
            <div className="App">
                <Header appName="SuperDate"/>
                <PersonList people = { this.state.people }/>
            </div>
        );
    }
}

export default App;
