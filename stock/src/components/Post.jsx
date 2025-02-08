
const names = ["Guilherme", "Guilherme Cosme dos Santos" ]

export default function Post() {

    const chosenName = Math.random() > 0.5 ? names[0] : names[1];

  return (
    <>
    <p> {chosenName} </p>
    <p>ReactJs is Awesome!</p>
    </>
  )
}
