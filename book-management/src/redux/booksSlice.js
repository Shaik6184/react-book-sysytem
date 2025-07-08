import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  categories: ['Fiction', 'Non-Fiction', 'Sci-Fi', 'Biography', 'Mystery'],
  books: [
    {
      id: '1',
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      description: 'A novel set in the Roaring Twenties.',
      rating: 4.5,
      category: 'Fiction',
      popular: true,
    },
    {
      id: '2',
      title: 'A Brief History of Time',
      author: 'Stephen Hawking',
      description: 'A popular-science book on cosmology.',
      rating: 4.7,
      category: 'Non-Fiction',
      popular: true,
    },
    {
      id: '3',
      title: 'Dune',
      author: 'Frank Herbert',
      description: 'A science fiction novel about politics and power.',
      rating: 4.8,
      category: 'Sci-Fi',
      popular: true,
    },
    {
      id: '4',
      title: 'The Martian',
      author: 'Andy Weir',
      description: 'A novel about an astronaut stranded on Mars.',
      rating: 4.6,
      category: 'Sci-Fi',
      popular: false,
    },
  ],
}

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload)
    },
  },
})

export const { addBook } = booksSlice.actions
export default booksSlice.reducer 