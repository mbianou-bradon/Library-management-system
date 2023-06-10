import "./bookdetails.css"


export default function BookDetails({closeModal}){

    return(
        <div className="book_detail_main_container">
            <div className="close" onClick={()=>closeModal}>
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
