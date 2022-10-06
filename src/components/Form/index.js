import { useState } from "react"

const BookForm = ({ onSave, onClose }) => {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [genre, setGenre] = useState('')
    const [finishedAt, setFinishedAt] = useState('')
    const [grade, setGrade] = useState('')

    const save = () => {
        onSave({
            title,
            author,
            genre,
            finishedAt,
            grade
        })
    }

    return (
        <>
            Título: <br />
            <input type="text" onChange={event => setTitle(event.target.value)} />

            <br /><br />

            Autor: <br />
            <input type="text" onChange={event => setAuthor(event.target.value)}/>

            <br /><br />

            Gênero: <br />
            <select onChange={event => setGenre(event.target.value)}>
                <option value=""></option>
                <option value="Ficção">Ficção</option>
                <option value="Ficção Científica">Ficção Científica</option>
                <option value="Fantasia">Fantasia</option>
                <option value="Mistério">Mistério</option>
                <option value="HQ">HQ</option>
                <option value="Não Ficção">Não Ficção</option>
            </select>

            <br /><br />

            Finalizado em: <br />
            <input type="date" onChange={event => setFinishedAt(event.target.value)}/>

            <br /><br />

            Nota: <br />
            <input type="number" onChange={event => setGrade(event.target.value)}/>

            <br /><br />
            <input type="button" value="Salvar" onClick={save}/>&nbsp;
            <input type="button" value="Cancelar" onClick={onClose}/>
        </>
    )
}

export default BookForm