import React from "react"
import "./bookcard.css"

export default function BookCard() {
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    const handleDetails = () =>{
        setIsModalOpen(prevState => !prevState);
    }

    const BookDetails = () => {

        return(
            <div className="book_detail_main_container">
                <div className="close" onClick={()=>setIsModalOpen(false)}>
                    <p>&times;</p>
                </div>
                <div className="book_detail_container">
                    <div className="book_detail_sub_container">
                        {/* Book Cover Page */}
                        <div className="book_cover_page_modal"></div>
                        {/* Book details */}
                        <div className="book_details_container_modal">
                            <h2 className="book__title_modal">Introduction to Microcontrollers</h2>
                            <div className="book__author__year__styles_modal">
                                <p className="book__author_modal">Author: Mbianou Bradon</p>
                                <p className="book__year_modal">Year: 2023</p>
                            </div>
                        </div>

                        {/* View Book Details */}
                        <div className="view_details_button">
                            <div className="button_container">
                                <button className="details_button return_button">Return Book</button>
                                <button className="details_button borrow_button">Borrow Book</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return(
        <>
            { isModalOpen && <BookDetails /> }
            <div className="book_card_container">
            
                <div className="book_card__subcontainer">
                    {/* Book Cover Page */}
                    <div className="book_card_cover_image">
                        <div></div>
                    </div>
                    {/* Book details */}
                    <div className="book_details_container">
                        <h2 className="book__title">Introduction to Microcontrollers</h2>
                        <div className="book__author__year__styles">
                            <p className="book__author">Author: Mbianou Bradon</p>
                            <p className="book__year">Year: 2023</p>
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