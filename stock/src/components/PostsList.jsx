import { useState } from "react";
import NewPost from "./NewPost";
import Post from "./Post";

import classes from "./PostsList.module.css"
import Modal from "./Modal";


export default function () {


  const [ enteredBody, setEnteredBody ] = useState("");
  const [ enteredAuthor, setEnteredAuthor ] = useState("");

  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value); // Variável atualizada aqui

  }

  function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }


  return (
    <>
    <Modal>
      <NewPost onBodyChange={bodyChangeHandler} onAuthorChange={authorChangeHandler} />
    </Modal>

    <ul className={classes.posts}>
    <Post author={enteredAuthor} body={enteredBody}  />  
    <Post author={enteredAuthor} body={enteredBody} />
    </ul>
    </>
  );
}
