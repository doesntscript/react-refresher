import { useLoaderData } from "react-router-dom";

import Post from "./Post";
import classes from "./PostsList.module.css"



export default function PostsList() {
  //  2 - Abordagem
  // let modalContent; 

  // if (modalIsVisible) {
  //   modalContent =  <Modal onClose={hideModalHandler} >
  //   <NewPost onBodyChange={bodyChangeHandler} onAuthorChange={authorChangeHandler} />
  //   </Modal>
  // }

  // Gerenciar uma lista de postagens e essa lista deve ser editada sempre que enviarmos uma nova postagem. 

  //fetch('http://localhost:8080/posts').then(response => response.json()).then(data = { setPosts(data.posts); 
  // });
   // Esse código causaria um loop ifinito 
  const posts = useLoaderData();  
 
  function addPostHandler(postData) {
    // setPosts([postData, ...posts]); // Não e o ideal : se você atualizar o estado e esse novo estado for baseado no valor do estado anterior , você deve passa uma funcção parad efinir os posts. 
    fetch('http://localhost:8080/posts', {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: {
        'Content-Type': 'application/json'
      }
    });
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
    {/* {isPosting && (
       <Modal onClose={onStopPosting} >
       <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
      </Modal>
    )} */}

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
