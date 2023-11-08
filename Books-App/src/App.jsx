import "./App.css";
import Book from "./Components/Book";
function App() {
  const book1 = {
    title: "harry Potter",
    author: "j.k. rolling",
    onShelf: true,
    likes: 21,
    num: 1,
    text: "hi1",
  };

  const book2 = {
    title: "harry Potter 2",
    author: "j.k. rolling",
    onShelf: false,
    likes: 200,
    num: 2,
    text: "hi2",
  };

  const book3 = {
    title: "harry Potter 3",
    author: "j.k. rolling",
    onShelf: true,
    likes: 1,
    num: 3,
    text: "hi3",
  };

  function takeBook(book) {
    book.onShelf = false;
    
  }

  return (
    <div id="shelf">
      <Book book={book1} onClick={() => takeBook(book1)} />
      <Book book={book2} onClick={() => takeBook(book2)} />
      <Book book={book3} onClick={() => takeBook(book3)} />
    </div>
  );
}

export default App;
