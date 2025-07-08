import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addBook } from '../redux/booksSlice'
import { useNavigate } from 'react-router-dom'

const AddBook = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const categories = useSelector(state => state.books.categories)
  const [form, setForm] = useState({
    title: '',
    author: '',
    description: '',
    rating: '',
    category: categories[0] || '',
  })
  const [error, setError] = useState('')

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (!form.title || !form.author || !form.description || !form.rating || !form.category) {
      setError('All fields are required.')
      return
    }
    if (isNaN(form.rating) || form.rating < 0 || form.rating > 5) {
      setError('Rating must be a number between 0 and 5.')
      return
    }
    dispatch(addBook({
      ...form,
      id: Date.now().toString(),
      rating: parseFloat(form.rating),
      popular: false,
    }))
    navigate('/books')
  }

  return (
    <div className="app-container">
      <div className="add-book">
        <h1>Add a New Book</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Title:</label>
            <input name="title" value={form.title} onChange={handleChange} />
          </div>
          <div>
            <label>Author:</label>
            <input name="author" value={form.author} onChange={handleChange} />
          </div>
          <div>
            <label>Description:</label>
            <textarea name="description" value={form.description} onChange={handleChange} />
          </div>
          <div>
            <label>Rating (0-5):</label>
            <input name="rating" value={form.rating} onChange={handleChange} />
          </div>
          <div>
            <label>Category:</label>
            <select name="category" value={form.category} onChange={handleChange}>
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <button type="submit">Add Book</button>
        </form>
      </div>
    </div>
  )
}

export default AddBook 