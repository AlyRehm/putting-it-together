// always import this
import React, { useState } from 'react';



const PersonCard = (props) => {
    const [age, setAge ] = useState(props.currentAge);

    return (
        <div>
            <h1>{ props.firstName } { props.lastName } </h1>
            {/* When the age was not updating, it was because you kept calling the currentAge. In the const above, you set the age to be the currentAge, so then you need to call age below for it to be able update */}
            {/* <p>Age: { currentAge }</p> */}
            <p>Age: { age }</p>
            <p>Hair Color: { props.hairColor }</p>

            {/* <button onClick = { () => console.log("bday button clicked")}>Happy Birthday {props.firstName}!</button> */}
            <button onClick = { () => setAge(age + 1)}>Happy Birthday {props.firstName}!</button>

        </div>
    )
}


// always need to export 
export default PersonCard;