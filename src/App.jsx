const title = "Bonjour tout le monde"
const style ={color : "red", backgroundColor : "blue"}
const showtitle = false

function App() {
  const handclick = (e) =>{
    console.log (e)
    alert ('Title')
  }
  return <>
  {showtitle ?
  <h1 id ="title" className="title" style={style}>{title}</h1> :
  <p>demo</p>
  }
  <input type="Text"></input>
  <p>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed cumque saepe reprehenderit ratione atque hic voluptatem numquam illum inventore. Ducimus explicabo voluptas labore architecto voluptatum tempora sapiente laborum nulla adipisci?
  </p>
  </>

}
export default App
