import React from "react"
import { bookData } from "../studentData"
import "./booktable.css"

export default function BookTable(){
    const [bookDataInfo, setBookDataInfo] = React.useState(bookData)

    const handleFilter = () => {
        setBookDataInfo(bookDataInfo.filter(book => book.status === "Borrowed"));
    }
    return(
        <div className="table_container">
            <table>
                <thead>
                    <th>
                        <td>Book ID</td>
                    </th>
                    <th>
                        <td>Book Title</td>
                    </th>
                    <th>
                        <td>Author</td>
                    </th>
                    <th>
                        <td>Published Year</td>
                    </th>
                    <th>
                        <td>Book Status</td>
                    </th>
                </thead>
                <tbody>
                    {
                        bookDataInfo.map((book, index)=>{
                            return (
                                <tr key={index}>
                                    <td>{book.BookID}</td>
                                    <td>{book.BookTitle}</td>
                                    <td>{book.author}</td>
                                    <td>{book.publishedYear}</td>
                                    <td>{book.status}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}