import React from 'react'
import { useContext } from 'react'
import { UsernameContext } from '../Contexts/UsernameContext'
export default function SubSubSubUser() {
    const username= useContext(UsernameContext)
  return (
    <div><h2>SubSubSubUser : {username}</h2> </div>

  )
}
