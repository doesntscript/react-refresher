

import classes from './NewPost.module.css';

function NewPost(props) {
    // const stateData = useState("");
    // stateData[0] // current value , valor do estado atual. 
    // stateData[1] // state updatin' fucntion , valor de atualização de estado(função). 

    // const [ enteredBody, setEnteredBody ] = useState('');
    // let enteredBody = ''; // Variável e atualizada aqui. 

    // function changeBodyHandler(event) {
    //     setEnteredBody(event.target.value); // Variável atualizada aqui
    
    // }


  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={props.onBodyChange} />
      </p>
      {/* <p> {enteredBody} </p>  emitida aqui  */}
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={props.onAuthorChange}/>
      </p>
    </form>
  );
}

export default NewPost;