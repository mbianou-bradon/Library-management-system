import React from "react"
import "./booklist.css"
import BookCard from "../BookCard/BookCard"

export default function BookList(){

    return (
        <div className="book_list_container">
            <div>
                <BookCard />
                <BookCard />
                <BookCard />
                <BookCard />
                <BookCard />
                <BookCard />
                <BookCard />
            </div>
        </div>
    )
}