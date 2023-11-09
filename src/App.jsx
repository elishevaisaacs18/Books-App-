import "./App.css";
import Book from "./Components/Book";
function App() {
  const books = [
    {
      id: 0,
      title: "harry Potter",
      author: "j.k. rolling",
      onShelf: true,
      likes: 21,
      num: 1,
      text: "hi1",
    },
    {
      id: 1,
      title: "harry Potter 2",
      author: "j.k. rolling",
      onShelf: false,
      likes: 200,
      num: 2,
      text: "hi2",
    },
    {
      id: 2,
      title: "harry Potter 3",
      author: "j.k. rolling",
      onShelf: true,
      likes: 1,
      num: 3,
      text: "hi3",
    },
  ];

  function takeBook(book) {
    book.onShelf = false;
  }

  const listItems = books.map((bookE) => (
    <Book book={bookE} key={bookE.id} onClick={() => takeBook(bookE)} />
  ));

  return <div id="shelf">{listItems}</div>;
}

export default App;
