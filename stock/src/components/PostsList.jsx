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

  // Gerenciar uma lista de postagens e essa lista deve ser editada sempre que enviarmos uma nova postagem. 
  const [posts, setPosts] = useState([  ]);

  function addPostHandler(postData) {
    // setPosts([postData, ...posts]); // Não e o ideal : se você atualizar o estado e esse novo estado for baseado no valor do estado anterior , você deve passa uma funcção parad efinir os posts. 
    setPosts((existingPosts) => [postData, ...existingPosts]); // atualização de estado pendentes mas otimizada
  }

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
       <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
      </Modal>
    )}

    {posts.length > 0 && (
      <ul className={classes.posts}>
      {posts.map((post) => ( 
       <Post key={post.body} author={post.author} body={post.body} />
    ))}
      </ul>
    )}
    {posts.length === 0 && (
      <div style={{ textAlign: 'center', color: 'white' }}>
        <h2>There are no posts yet.</h2>
        <p>Start adding something cool about you day/life !</p>
      </div>
    )}
    </>
  );
}
