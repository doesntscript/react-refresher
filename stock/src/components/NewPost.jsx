

import { useState } from 'react';
import classes from './NewPost.module.css';

function NewPost({  onCancel, onAddPost }) {
    // const stateData = useState("");
    // stateData[0] // current value , valor do estado atual. 
    // stateData[1] // state updatin' fucntion , valor de atualização de estado(função). 

    // const [ enteredBody, setEnteredBody ] = useState('');
    // let enteredBody = ''; // Variável e atualizada aqui. 

    // function changeBodyHandler(event) {
    //     setEnteredBody(event.target.value); // Variável atualizada aqui
    
    // }

  const [ enteredBody, setEnteredBody ] = useState("");
  const [ enteredAuthor, setEnteredAuthor ] = useState("");

  

  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value); // Variável atualizada aqui

  }

  function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault(); // Isso impede que o padrão do navegador gere e envie uma solicitação HTTP.
    const postData = {
      body: enteredBody,
      author: enteredAuthor
    };
    // console.log(postData);
    onAddPost(postData);
    onCancel();
  }



  return (
    <form className={classes.form} onSubmit={submitHandler} >
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={bodyChangeHandler} />
      </p>
      {/* <p> {enteredBody} </p>  emitida aqui  */}
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={authorChangeHandler}/>
      </p>
      <p className={classes.actions} >
      <button type='button' onClick={onCancel} > Cancel </button>
      <button> Submit </button>
      </p>
    </form>
  );
}

export default NewPost;