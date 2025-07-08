import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Home = () => {
  const categories = useSelector(state => state.books.categories)
  const books = useSelector(state => state.books.books)
  const popularBooks = books.filter(book => book.popular)

  return (
    <div className="app-container">
      <div className="home">
        <h1>Welcome to the Online Library</h1>
        <h2>Book Categories</h2>
        <ul>
          {categories.map(cat => (
            <li key={cat}><Link to={`/books/${cat}`}>{cat}</Link></li>
          ))}
        </ul>
        <h2>Popular Books</h2>
        <ul>
          {popularBooks.map(book => (
            <li key={book.id}>
              <strong>{book.title}</strong> by {book.author} {' '}
              <Link to={`/book/${book.id}`}>View Details</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Home 