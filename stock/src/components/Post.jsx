
// const names = ["Guilherme", "Guilherme Cosme dos Santos" ];

export default function Post(props) {

    // const chosenName = Math.random() > 0.5 ? names[0] : names[1];

  return (
    <>
    <p> {props.author} </p>
    <p> {props.body} </p>
    </>
  )
}
