
// const names = ["Guilherme", "Guilherme Cosme dos Santos" ];

import classes from './Post.module.css';

export default function Post({ author, body }) {

    // const chosenName = Math.random() > 0.5 ? names[0] : names[1];

  return (
    <li className={classes.post} >
    <p className={classes.author} > {author} </p>
    <p className={classes.text} > {body} </p>
    </li>
  )
}
