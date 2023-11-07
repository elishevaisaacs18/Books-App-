import "./App.css";
import Book from "./Components/Book";
function App() {
  return (
    <div id="shelf">
      <Book title="harry Potter" author="j.k. rolling" onShelf={true} likes={21} num={1}/>
      <Book title="harry Potter 2" author="j.k. rolling" onShelf={false} likes={200} num={2}/>
      <Book title="harry Potter 3" author="j.k. rolling" onShelf={true} likes={1} num={3}/>
    </div>
  );
}

export default App;
