import React from "react";
import SubUser from "./SubUser";

/* 6 -   create   */
import {useContext} from "react"

/* 8 -   create   and  9- add as pararmeter  in  useContext */
import { UsernameContext } from "../Contexts/UsernameContext";

export default function User() {


/* 7 -   create insatnce from   useContext   9-here  */
const username= useContext(UsernameContext)
 console.log(username); //Reza Asadi
  return (
    <div>
      <h2> User: {username}</h2>
      {/* delete props username={username}  */}
      <SubUser />
    </div>
  );
}
