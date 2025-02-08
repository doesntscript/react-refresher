import Post from "./Post";

import classes from "./PostsList.module.css"


export default function () {

  return (
    <>
    <ul className={classes.posts}>
    <Post author="Guilherme Developer" body="React Three Fiber is Awesome! " />
    <Post author="Guilherme Cosme" body="Check out the full course!" />
    </ul>
    </>
  );
}
