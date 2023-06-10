import React from "react"
import "./bookcard.css"
import BookDetails from "../BookDetails/BookDetails"

export default function BookCard({title, author, year}) {
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    const handleDetails = () =>{
        setIsModalOpen(prevState => !prevState);
    }
    const closeModal = () => setIsModalOpen(false);
   

    return(
        <>
            { isModalOpen && <BookDetails title={title} author={author} year={year} closeModal={()=>closeModal()}/> }
            <div className="book_card_container">
            
                <div className="book_card__subcontainer">
                    {/* Book Cover Page */}
                    <div className="book_card_cover_image">
                        <div></div>
                    </div>
                    {/* Book details */}
                    <div className="book_details_container">
                        <h2 className="book__title">{title}</h2>
                        <div className="book__author__year__styles">
                            <p className="book__author">Author: {author}</p>
                            <p className="book__year">Year: {year}</p>
                        </div>
                    </div>

                    {/* View Book Details */}
                    <div className="view_details_button">
                        <div>
                            <button className="details_button" onClick={()=>handleDetails()}>View Details</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}