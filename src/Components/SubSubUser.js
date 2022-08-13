import React from 'react'
import SubSubSubUser from './SubSubSubUser'
import { UsernameContext } from '../Contexts/UsernameContext'
import { useContext } from 'react'
export default function SubSubUser() {
const username=useContext(UsernameContext)
  return (
    <div><h2>SubSubUser: {username}</h2> 
    <SubSubSubUser /> </div>
  )
}
