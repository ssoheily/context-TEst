import React, { useState } from "react";
import User from "./Components/User";
/* 4- import in app.js  .  11-delete */
// import {UsernameContext} from "./Contexts/UsernameContext"
import UsernameProvider from "./Contexts/UsernameContext";
function App() {
  // console.log(UsernameContext);
  /* clear username */
  // const [username, setUsername] = useState("Reza Asadi");
  return (
    /* 5-   create something same container for jsx  and define your variable in repository(value) */
    // <UsernameContext.Provider value={username}>
    //       <div>
    //         {/* delete props  username={username}  */}
    //         <User />
    //       </div>
    // </UsernameContext.Provider>

    <UsernameProvider>
      <div>
        <User />
      </div>
    </UsernameProvider>
  );
}

export default App;


