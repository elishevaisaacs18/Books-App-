
const Book = (props) => {
  return (
    <div>
        {props.title && <p>{props.title}</p>}
        <p>{props.author}</p>
        <p>{props.onShelf}</p>
        <p>{props.likes}</p>

      {/* likes, onshelf,author,title */}
    </div>
  )
}

export default Book
