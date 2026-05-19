import { useState } from 'react'
import './App.css'
import UserContext from './context/UserContext'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

export default function App() {
  return (
    <div className='bg-gray-900/75 w-screen h-full'>
      <UserContextProvider >

        <h1 className='flex flex-cols justify-center items-center text-3xl '>My Context app</h1>
        <Login />
        <Profile />
      </UserContextProvider >

    </div>
  )
}