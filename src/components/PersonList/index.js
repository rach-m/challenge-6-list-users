import React from 'react';
import Person from '../Person';

function PersonList(props) {
    return <div className="userList">
        { props.people.map((person, i) => {
            return <Person key = { i } person = { person }/>;
        }) }
    </div>;
}
export default PersonList;
