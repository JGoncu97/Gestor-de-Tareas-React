import React from 'react'
import './Container.css'
export const ContainerTaks = ({children}) => {

  return (
    <ul className='container-tasks'>{children}</ul>
  )
}
