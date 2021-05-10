import userEvent from '@testing-library/user-event';
import React, { useState, useEffect} from 'react';
import styled from 'styled-components';
 import SearchBox from 'SearchBox';



function App() {

  const [serachtext, setSearchtext] = useState ('');

  const [lista, setLista] = useState([]);

  useEffect (() => {

    setLista([
      {title:'Comrpar o bolo', done:false},
      {title:'garvar aula', done:true},
      {title:'Estuda', done:true}
      
    ])
  }, []);

  function addAction (newItem) {
    
      let newLista = [...lista, {title:newItem, done:false}];
      setLista(newLista);

  }

  function handleToggDone(index) {
    let newLista = [...lista];
    newLista[index].done = !newLista[index].done;

    setLista(newLista);

  }



  return (
    <>
       
    <h1> Lista de tarefas</h1>

      <SearchBox frasePadrao = "Cadastra item na lista: "
      onEnter = {addAction}
 
        
      />
    <hr/>

<ul>
      {lista.map((item, index) => (

          <li key ={index}>
           {item.done &&
            <del> {item.title} </del>
           }

           {!item.done &&
            item.title
           }
           <button onClick={()=>handleToggDone(index)}>
             
              {item.done && 'Desfazer'}
              {!item.done && 'fazer'}

            </button>
            
             </li>

      ) )}
      
</ul>

    </>
  );
}

export default App;
