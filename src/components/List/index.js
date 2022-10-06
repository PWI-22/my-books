const BookList = ({ books, onRegister }) => {
    return (
        <>
            <table width="80%" border="1">
                <thead>
                    <tr>
                        <th width="30%">Título</th>
                        <th width="25%">Autor</th>
                        <th width="20%">Gênero</th>
                        <th width="15%">Finalizado em</th>
                        <th width="10%">Nota</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book, index) => (
                        <tr key={index}>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                            <td>{book.genre}</td>
                            <td>{book.finishedAt}</td>
                            <td>{book.grade}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <input type="button" value="Cadastrar Livro" onClick={onRegister}/>
        </>
    )
}

export default BookList