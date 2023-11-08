import styles from "../Book.module.css";
const Book = (props) => {
  console.log(props.book.author);
  return (
    <div
      className={styles.book}
      style={{ backgroundColor: props.book.onShelf ? "navajowhite" : "white" }}
    >
      {props.book.likes > 100 ? (
        <h2>{props.book.title}</h2>
      ) : (
        <p>{props.book.title}</p>
      )}

      <p>{props.book.author}</p>

      {props.book.onShelf === true ? (
        <>
          <p>
            {props.book.onShelf}
            <button
              onClick={(e) => {
                props.onClick;
                e.target.parentNode.parentNode.style.backgroundColor = "white";
                e.target.parentNode.remove();
              }}
            >
              Take Book
            </button>
          </p>
        </>
      ) : (
        <p>{props.book.onShelf}</p>
      )}
      <>
        <p id="likes">{props.book.likes}</p>
        <p>{props.book.num}</p>
        <button onClick={() => alert(props.book.text)}>click me</button>
        <button
          onClick={(e) => {
            e.target.parentNode.children[3].textContent = ++props.book.likes;
          }}
        >
          Like
        </button>
      </>
    </div>
  );
};

export default Book;
