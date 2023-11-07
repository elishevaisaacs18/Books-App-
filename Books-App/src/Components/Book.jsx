import styles from "../Book.module.css"
const Book = (props) => {
  return (
    <div className={styles.book} style={{backgroundColor: props.onShelf ? "navajowhite": "white"}}>
        {props.likes > 100 ? <h2>{props.title}</h2>: <p>{props.title}</p> }
        <p>{props.author}</p>
        <p>{props.onShelf}</p>
        <p>{props.likes}</p>
        <p>{props.num}</p>
    </div>
  )
}

export default Book
