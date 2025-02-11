
// const names = ["Guilherme", "Guilherme Cosme dos Santos" ];

import { Link } from 'react-router-dom';
import classes from './Post.module.css';

export default function Post({ id, author, body }) {

    // const chosenName = Math.random() > 0.5 ? names[0] : names[1];

  return (
    <li className={classes.post} >
     <Link to={id}>
     <p className={classes.author} > {author} </p>
     <p className={classes.text} > {body} </p>   
     </Link>
    </li>
  )
}
