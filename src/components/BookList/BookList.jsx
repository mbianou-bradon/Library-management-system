import React from "react"
import "./booklist.css"
import BookCard from "../BookCard/BookCard"
import StudentTable from "../StudentTable/StudentTable";
import BookTable from "../../BookTable/BookTable";
import { store } from "../../redux/store";

export default function BookList(){
    const admin = store.getState().role.role
    const role = admin === "admin"? true : false

    const [isAdmin, setIsAdmin] = React.useState(role);


    return (
        <>
        {isAdmin?
            // <StudentTable/>
            <BookTable />
            :
            <div className="book_list_container">
                <div>
                    <BookCard title={"Introduction to Microcontroller"} author={"Mbianou Bradon"} year={"2023"}/>
                    <BookCard title={"The History behind Science"} author={"Mayelle"} year={"2021"}/>
                    <BookCard title={"Advanced Physics"} author={"Nelkon & Parker"} year={"2003"}/>
                    <BookCard title={"It's time to wake"} author={"Kenne Suzy"} year={"2018"}/>
                    <BookCard title={"Biological Science"} author={"Sirri Theresia"} year={"2014"}/>
                    <BookCard title={"Your Key to success in Mathematics"} author={"Sir Divine"} year={"2012"}/>
                    <BookCard title={"Economics Made easy"} author={"Wendy Djoumessi"} year={"2011"}/>
                </div>
            </div>
        }
        </>
    )
}