import React from "react";
import classes from "./UsersList.module.css";

export default function UsersList(props) {
  return (
    <div className={classes.users}>
      <ul>
        {props.users.map((user) => {
          return (
            <li key={user.id}>
              {user.name} {user.age} years old
            </li>
          );
        })}
      </ul>
    </div>
  );
}
