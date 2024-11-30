import './App.css'
import React from 'react'
import { Home } from './Pages/Home'
import { TaskProvider } from './Context/Context'


export const App = () => {
  return (
    <>
      <TaskProvider>
        <Home/>
      </TaskProvider>
        
      
    </>
  )
}
