import { useParams, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const BookDetails = () => {
  const { id } = useParams()
  const book = useSelector(state => state.books.books.find(b => b.id === id))

  if (!book) return <div className="app-container"><div>Book not found. <Link to="/books">Back to Browse</Link></div></div>

  return (
    <div className="app-container">
      <div className="book-details">
        <h1>{book.title}</h1>
        <h2>by {book.author}</h2>
        <p><strong>Category:</strong> {book.category}</p>
        <p><strong>Description:</strong> {book.description}</p>
        <p><strong>Rating:</strong> {book.rating}</p>
        <Link to="/books">Back to Browse</Link>
      </div>
    </div>
  )
}

export default BookDetails 