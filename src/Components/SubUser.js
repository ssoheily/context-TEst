import React from "react";
import SubSubUser from "./SubSubUser";
import { UsernameContext } from "../Contexts/UsernameContext";
import { useContext } from "react";

export default function SubUser() {
    const username=useContext(UsernameContext)
  return (
    <div>
      <h2>SubUser: {username}</h2>
      <SubSubUser  />
    </div>
  );
}
 