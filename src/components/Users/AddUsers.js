import React, { useState } from "react";
import ErrorModel from "../UI/ErrorModel";
import Card from "../UI/Card";
import  "./AddUsers.css";

export default function AddUsers(props) {
  const [userState, setUserState] = useState("");
  const [ageState, setAgeState] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if (userState.trim().length === 0 || ageState.trim().length === 0) {
      setError({
        title: "An Error Ocurred!",
        message: "Invalid Username or Age!",
      });
      return;
    }
    if (+ageState < 1) {
      setError({
        title: "An Error Ocurred!",
        message: "Invalid Age!",
      });
      return;
    }
    props.onAddUsers(userState, ageState);
    setUserState("");
    setAgeState("");
  };

  const userHandler = (event) => {
    setUserState(event.target.value);
  };
  const ageHandler = (event) => {
    setAgeState(event.target.value);
  };

  const errorHandler = (onChangeError) => {
    setError(null);
  };
  return (
    <>
        {error && (
          <ErrorModel
            title={error.title}
            message={error.message}
            onConfirm={errorHandler}
          />
        )}
      <Card className="input">
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input type="text" value={userState} onChange={userHandler} />
          <label htmlFor="age">Age (years)</label>
          <input type="number" value={ageState} onChange={ageHandler} />
          <button type="submit">Add Users</button>
        </form>
      </Card>
    </>
  );
}
