import styles from "../Book.module.css";
import { useState } from "react";

const Book = (props) => {
  const [likes, setLikes] = useState(props.book.likes);
  const [onShelf, setOnShelf] = useState(props.book.onShelf);
  const bookTitle =
    likes >= 100 ? <h2>{props.book.title}</h2> : <p>{props.book.title}</p>;
  // Started function
  function bookOnShelf() {
    return onShelf === true ? (
      <p>
        {onShelf}
        <button
          onClick={() => {
            setOnShelf(false);
          }}
        >
          Take Book
        </button>
      </p>
    ) : (
      <p>{onShelf}</p>
    );
  }
  // finish function
  function addLike() {
    setLikes(likes + 1);
  }

  return (
    <div
      className={styles.book}
      style={{ backgroundColor: onShelf && "navajowhite" }}
    >
      {bookTitle}
      <p>{props.book.author}</p>
      {bookOnShelf()}
      <p id="likes"> {likes}</p>
      <p>{props.book.num}</p>
      <button onClick={() => alert(props.book.text)}>Click me</button>
      <button onClick={addLike}>Likes</button>
    </div>
  );
};

export default Book;
