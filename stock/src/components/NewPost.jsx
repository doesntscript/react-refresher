
import { useState } from 'react';
import classes from './NewPost.module.css';

function NewPost() {
    // const stateData = useState("");
    // stateData[0] // current value , valor do estado atual. 
    // stateData[1] // state updatin' fucntion , valor de atualização de estado(função). 

    const [ enteredBody, setEnteredBody ] = useState('');
    // let enteredBody = ''; // Variável e atualizada aqui. 

    function changeBodyHandler(event) {
        setEnteredBody(event.target.value); // Variável atualizada aqui
    
    }


  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={changeBodyHandler} />
      </p>
      <p> {enteredBody} </p>  {/* emitida aqui  */}
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required />
      </p>
    </form>
  );
}

export default NewPost;