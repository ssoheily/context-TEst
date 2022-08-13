import React, { useState } from "react";
/* 1- first create folder contect and  */
/* 2-create context with import  */
import { createContext } from "react";

/* 3- create Component-UsernameContext()  */
export const UsernameContext = createContext();

/* childern is :  children-Tag <UsernameContext.Provider> in App.js  ex:  <div><User /></div> */
/* 8 - replace <UsernameContext.Provider> in App.js .,here create .... */
const UsernameProvider = ({ children }) => {
  const [username, setUsername] = useState("Reza Asadi");
  /* 10- change <div> <User /></div>  to childern */

  return (
    <UsernameContext.Provider value={username}>
      {children}
    </UsernameContext.Provider>
  );
};
/* 9- export UsernameProvider plus export this compnenet */
export default UsernameProvider;


/* sdsd */