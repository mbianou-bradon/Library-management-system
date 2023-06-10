import React from "react"
import "./sideMenu.css"
import { GoBook } from "react-icons/go"
import { BsPersonFillExclamation, BsPersonFillSlash } from "react-icons/bs"
import { FaBookReader } from "react-icons/fa"
import { store } from "../../redux/store"
import { NavLink } from "react-router-dom"


export default function SideMenu(){
    const admin = store.getState().role.role
    const role = admin === "admin"? true : false

    const [isAdmin, setIsAdmin] = React.useState(role)

    const borrowedbook = "borrowedbook"

    return (
        <div className="sidebar_container">
            { !isAdmin? 
            <div>
                <div className="content__filtering">
                    <h2>Look for your perfect book</h2>
                </div>
                <div>
                    <ul className="list__of__different__content">
                        <li>
                            <div className="filter_subject_icon"></div>
                            Biology</li>
                        <li>
                            <div className="filter_subject_icon"></div>
                            Chemistry</li>
                        <li>
                            <div className="filter_subject_icon"></div>
                            Mathematics</li>
                        <li>
                            <div className="filter_subject_icon"></div>
                            Physics</li>
                        <li>
                            <div className="filter_subject_icon"></div>
                            Technology</li>
                        <li>
                            <div className="filter_subject_icon"></div>
                            Accounting</li>
                        <li>
                            <div className="filter_subject_icon"></div>
                            Economics</li>
                        <li>
                            <div className="filter_subject_icon"></div>
                            Marketing</li>
                        <li>
                            <div className="filter_subject_icon"></div>
                            Finance</li>
                        <li>
                            <div className="filter_subject_icon"></div>
                            Environment</li>
                        <li>
                            <div className="filter_subject_icon"></div>
                            Science and Research</li>
                        <li>
                            <div className="filter_subject_icon"></div>
                            Personal Growth</li>
                    </ul>
                </div>

                <div className="report">
                    <p>If you want to ask any question or <span>report</span> about a missing book, press the button below</p>
                    <div>
                        <button>Contact</button>
                    </div>
                </div>
            </div>
            :
            <div>
                <div className="content_navigation">
                    <h2>Navigation</h2>
                </div>
                <ul className="navigation__links">
                    <li>
                        <NavLink to={"/"} className={({isActive})=> !isActive? "nav_link ": "nav_link_active"}>
                            <GoBook className="nav_icon"/>
                            All Books
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={`/book/${borrowedbook}`} className={({isActive})=> !isActive? "nav_link" : "nav_link_active"}>
                            <FaBookReader className="nav_icon"/>
                            Borrowed Books
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/sanctionstudent"} className={({isActive})=> !isActive? "nav_link" : "nav_link_active"}>
                            <BsPersonFillExclamation className="nav_icon"/>
                            Sanctioned Students
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/dismissedstudent"} className={({isActive})=> !isActive? "nav_link" : "nav_link_active"}>
                            <BsPersonFillSlash className="nav_icon"/>
                            Dismissed Students
                        </NavLink>
                    </li>
                    {/* <BiSolidBookAdd/> */}
                </ul>
            </div>
            }
        </div>
    )
}