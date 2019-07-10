import React from 'react';

function Person (props){

    function capitalize(word){
        let split = word.split(',');
        let capital = split[0][0].toUpperCase();
        let capitalizedWord = capital + split[0].slice(1);
        return capitalizedWord;
    }

    return props.person.name ? <div className="user">
        <div className="picture">
            <img src={ props.person.picture.large } alt = { `${props.person.name.first} ${props.person.name.last}` } />
        </div>
        <div className="info">
            <div className="name">
                <span>{capitalize(props.person.name.title)} </span>
                <span>{capitalize(props.person.name.first)} </span>
                <span>{capitalize(props.person.name.last)} </span>
            </div>
            <div className="email">
                <span>{props.person.email}</span>
            </div>
            <div className="phone">
                <span>{props.person.phone}</span>
            </div>
        </div>
    </div> : null;
}

export default Person;
