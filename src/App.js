import { useEffect, useState } from "react"
import BookForm from "./components/Form"
import BookList from "./components/List"
import { bookService } from './service'

const App = () => {
    const [register, setRegister] = useState(false)
    const [books, setBooks] = useState([])

    useEffect(() => {
        const result = bookService.getBooks()
        setBooks(result)
    }, [])

    const switchRegister = () => {
        setRegister(!register)
    }

    const save = (book) => {
        const newBooks = [...books, book]
        bookService.save(newBooks)
        
        setBooks(newBooks)
        switchRegister()
    }

    const renderContent = () => {
        if (register) {
            return <BookForm onClose={switchRegister} onSave={save}/>
        }

        return <BookList books={books} onRegister={switchRegister}/>
    }

    return (
        <div>
            <h1>My Books</h1>
            {renderContent()}
        </div>
    )
}

export default App