import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { useState } from 'react'

const BrowseBooks = () => {
  const { category } = useParams()
  const books = useSelector(state => state.books.books)
  const [search, setSearch] = useState('')

  const filteredBooks = books.filter(book => {
    const matchesCategory = category ? book.category === category : true
    const matchesSearch =
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="app-container">
      <div className="browse-books">
        <h1>Browse Books {category && `- ${category}`}</h1>
        <input
          type="text"
          placeholder="Search by title or author..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{ marginBottom: '1rem', padding: '0.5rem', width: '100%' }}
        />
        <ul>
          {filteredBooks.map(book => (
            <li key={book.id}>
              <strong>{book.title}</strong> by {book.author} ({book.category}) {' '}
              <Link to={`/book/${book.id}`}>View Details</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default BrowseBooks 