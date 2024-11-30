import React, { useContext, useState, useRef } from 'react';
import { taskContext } from '../../Context/Context';
import './NewTask.css';

export const NewTasks = () => {
    const context = useContext(taskContext);
    const [titleTask, setTitle] = useState('');
    const [descriptionTask, setDescription] = useState('');
    const txtTitle = useRef('');
    const txtDescription = useRef('');

    const handleTitleTask = (e) => setTitle(e.target.value);
    const handleDescriptionTask = (e) => setDescription(e.target.value);

    const handleCreateTask = (e) => {
        e.preventDefault();

        // Llamar a la función addNewTask desde el contexto
        context.addNewTask(titleTask, descriptionTask);

        // Limpiar los campos de entrada
        txtTitle.current.value = '';
        txtDescription.current.value = '';
    };

    return (
        <form className='frm-task'>
            <fieldset>
                <label>Titulo de la tarea</label>
                <input
                    ref={txtTitle}
                    onChange={handleTitleTask}
                    placeholder='Ej: Aseo Ambiente'
                    type='text'
                />
            </fieldset>
            <fieldset>
                <label>Descripcion de la tarea</label>
                <input
                    ref={txtDescription}
                    onChange={handleDescriptionTask}
                    placeholder='Ej: Realizar el aseo del ambiente'
                    type='text'
                />
            </fieldset>
            <button onClick={handleCreateTask} className='btn-new-task'>
                Crear una nueva Tarea
            </button>
        </form>
    );
};
