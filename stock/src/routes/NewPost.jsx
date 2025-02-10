


import classes from './NewPost.module.css';
import { Form, Link, redirect } from 'react-router-dom';
import Modal from '../components/Modal';

function NewPost() {
    // const stateData = useState("");
    // stateData[0] // current value , valor do estado atual. 
    // stateData[1] // state updatin' fucntion , valor de atualização de estado(função). 

    // const [ enteredBody, setEnteredBody ] = useState('');
    // let enteredBody = ''; // Variável e atualizada aqui. 

    // function changeBodyHandler(event) {
    //     setEnteredBody(event.target.value); // Variável atualizada aqui
    
    // }




  return (
    <Modal > 
      <Form method='post' className={classes.form}  >
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" name="body" required rows={3} />
      </p>
      {/* <p> {enteredBody} </p>  emitida aqui  */}
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" name="author" required />
      </p>
      <p className={classes.actions} >
      <Link to="/" type='button' > Cancel </Link>
      <button> Submit </button>
      </p>
    </Form>
    </Modal>
  );
}

export default NewPost;

export async function action({ request }) {
  const formData = await request.formData();
  const postData = Object.fromEntries(formData);  // {body: '...', author: '...}
  await fetch('http://localhost:8080/posts', {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return redirect('/');
}