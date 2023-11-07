import "./App.css";
import Book from "./Components/Book";
function App() {
  return (
    <>
      <Book title="harry Potter" author="j.k. rolling" onShelf={true} likes={21} />
      <Book title="harry Potter 2" author="j.k. rolling" onShelf={false} likes={200} />
      <Book title="harry Potter 3" author="j.k. rolling" onShelf={true} likes={1} />
    </>
  );
}

export default App;
