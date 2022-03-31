import React from "react";
import "./index.css";
import {useState} from "react";


function App() {
    const [error, setError] = useState(false);

    function onAddUser(){

    }
    const addUserHandler = (event) => {
            event.preventDefault();
            if (enteredUsername.trim().length === 0 || enteredUserSurname.trim().length === 0 || enteredAge.trim().length === 0) {
                setError({
                    title: 'Invalid input',
                    message: 'Please enter a valid name and age (non-empty values).',
                });
                return;
            }
            if (+enteredAge < 1) {
                setError({
                    title: 'Invalid age',
                    message: 'Please enter a valid age (> 0).',
                });
                return;
            }
            onAddUser(enteredUsername, enteredAge);
            setEnteredUsername('');
            setEnteredAge('');
        }, [usersList, setUsersList] = useState([]), [enteredAge, setEnteredAge] = useState(''), [enteredUsername, setEnteredUsername] = useState(''), [enteredUserSurname, setEnteredUserSurname] = useState(''),
        usernameChangeHandler = (event) => {
            setEnteredUsername(event.target.value);
        }, userSurnameChangeHandler = (event) => {
            setEnteredUserSurname(event.target.value);
        }, ageChangeHandler = (event) => {
            setEnteredAge(event.target.value);
        };


    return (
        <div class="form-container">
            <form onSubmit={addUserHandler} class="register-form">
                <input
                    id="first-name"
                    class="form-field"
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    value={enteredUsername}
                    onChange={usernameChangeHandler}
                />
                <input
                    id="last-name"
                    class="form-field"
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    value={enteredUserSurname}
                    onChange={userSurnameChangeHandler}
                />
                <label>
                    <input type="radio"/> Male
                </label>
                <label>
                    <input type="radio"/> Female
                </label>
                <input
                    id="age"
                    class="form-field"
                    type="number"
                    placeholder="Age"
                    name="age"
                    value={enteredAge}
                    onChange={ageChangeHandler}
                />
                <button class="form-field" type="submit">
                    Register
                </button>
            </form>
            <div>

            </div>
        </div>


    );
}

export default App;
