import React, { useContext, useEffect } from 'react'
import './InfoTask.css'
import { taskContext } from '../../Context/Context'


export const InfoTasks = () => {

    const context= useContext(taskContext)

    useEffect(()=>{
      let pending = context.tasks.filter(tasks => tasks.status === false);
      let resolve = context.tasks.filter(tasks => tasks.status === true);;

      context.setPending(pending.length)
      context.setDone(resolve.length)

    
    },[context.tasks])

  return (
    <>
        <div className='infoContainer'>
          <h2 className='info-tasks'>Usted tiene <span className='task-pending'>{context.pendingTasks}</span> pendientes y <span className='task-done'>{context.doneTasks}</span> terminadas</h2>
          <hr />
        </div>
        
    </>
  )
}
