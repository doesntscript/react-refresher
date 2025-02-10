import { useState } from "react";
import NewPost from "./NewPost";
import Post from "./Post";

import classes from "./PostsList.module.css"
import Modal from "./Modal";


export default function ({ isPosting, onStopPosting }) {

  
  //  2 - Abordagem
  // let modalContent; 

  // if (modalIsVisible) {
  //   modalContent =  <Modal onClose={hideModalHandler} >
  //   <NewPost onBodyChange={bodyChangeHandler} onAuthorChange={authorChangeHandler} />
  //   </Modal>
  // }


  return (
    <>
    {/* {modalContent} */}
    {/* Maneir de introduzir o conteúdo condicionalmente */}

    {/* 1 - { modalIsVisible ? ( 
     <Modal onClose={hideModalHandler} >
     <NewPost onBodyChange={bodyChangeHandler} onAuthorChange={authorChangeHandler} />
    </Modal>
    )  : false
    } */}

    {/* 3 - Abordagem */}
    {isPosting && (
       <Modal onClose={onStopPosting} >
       <NewPost onCancel={onStopPosting} />
      </Modal>
    )}
    

    <ul className={classes.posts}>
    
    <Post author="Guilherme" body="Reactjs is awesome!" />
    </ul>
    </>
  );
}
