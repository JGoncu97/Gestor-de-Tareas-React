import React, { useContext } from 'react'; 
import { Header } from '../Layouts/Header/Header';
import { Main } from '../Layouts/Main/Main';
import { ContainerTaks } from '../Layouts/Container/ContainerTaks';
import { ItemTask } from '../Other/ItemTask/ItemTask';
import { taskContext } from '../Context/Context';  
import { NewTasks } from '../Other/NewTask/NewTasks';
import './Home.css'
import { InfoTasks } from '../Layouts/InfoTask/InfoTasks';
import { FilterTasks } from '../Other/FilterTaks/FilterTasks';


export const Home = () => {
  
  const { filterTasks } = useContext(taskContext);  

  return (
    <div className='Home'>
      <Header>
        <h1>Gestor de Tareas</h1>
      
      </Header>
      <Main>
      <InfoTasks/>
      <NewTasks/>
      <FilterTasks/>
        <ContainerTaks>
        
          {filterTasks.map(task => (
            <ItemTask 
              key={task.id} 
              idTask={task.id} 
              content={task.description} 
              titleTask={task.title} 
            />
          ))}
        </ContainerTaks>
      </Main>
    </div>
  );
};
