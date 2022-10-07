import { useFormik } from "formik";
import * as Yup from "yup";

const bookValidationSchema = Yup.object({
    title: Yup.string().required("Título é obrigatório!"),
    author: Yup.string().required("Autor é obrigatório!"),
    genre: Yup.string().required("Gênero é obrigatório!"),
    finishedAt: Yup.date().required("Data de finalização é obrigatória"),
    grade: Yup.number().required("Nota é obrigatória"),
});

const BookForm = ({ onSave, onClose }) => {
    const { errors, touched, handleBlur, handleChange, handleSubmit } = useFormik(
        {
            initialValues: {
                title: "",
                author: "",
                genre: "",
                finishedAt: "",
                grade: "",
            },
            validationSchema: bookValidationSchema,
            validateOnChange: false,
            validateOnBlur: true,
            onSubmit: (values) => save(values),
        }
    );

    const save = (book) => {
        onSave(book);
    };

    return (
        <form onSubmit={handleSubmit}>
            Título: <br />
            <input
                type="text"
                name="title"
                onBlur={handleBlur}
                onChange={handleChange}
            />
            <div>{touched.title ? errors.title : null}</div>
            <br />
            Autor: <br />
            <input
                type="text"
                name="author"
                onBlur={handleBlur}
                onChange={handleChange}
            />
            <div>{touched.author ? errors.author : null}</div>
            <br />
            Gênero: <br />
            <select name="genre" onChange={handleChange} onBlur={handleBlur}>
                <option value=""></option>
                <option value="Ficção">Ficção</option>
                <option value="Ficção Científica">Ficção Científica</option>
                <option value="Fantasia">Fantasia</option>
                <option value="Mistério">Mistério</option>
                <option value="HQ">HQ</option>
                <option value="Não Ficção">Não Ficção</option>
            </select>
            <div>{touched.genre ? errors.genre : null}</div>
            <br />
            Finalizado em: <br />
            <input
                type="date"
                name="finishedAt"
                onChange={handleChange}
                onBlur={handleBlur}
            />
            <div>{touched.finishedAt ? errors.finishedAt : null}</div>
            <br />
            Nota: <br />
            <input
                type="number"
                name="grade"
                onChange={handleChange}
                onBlur={handleBlur}
            />
            <div>{touched.grade ? errors.grade : null}</div>
            <br />
            <input type="submit" value="Salvar" />
            &nbsp;
            <input type="button" value="Cancelar" onClick={onClose} />
        </form>
    );
};

export default BookForm;
