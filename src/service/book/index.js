const STORAGE_KEY = 'my-books'

export const getBooks = () => {
    const temp = localStorage.getItem(STORAGE_KEY)
    return temp ? JSON.parse(temp) : []
}

export const save = (books) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(books))
}
