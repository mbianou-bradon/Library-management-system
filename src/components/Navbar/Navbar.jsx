import React from "react"
import "./navbar.css"
import { ImSearch } from "react-icons/im"
import { RxPerson } from "react-icons/rx"

export default function Navbar(){
    const [isSignIn, setIsSignIn] = React.useState(false);

    return (
        <nav>
            {/* Logo Container */}
            <div className="logo_container">
                <div>
                    <h2>Libra<span>Book</span></h2>
                </div>
            </div>
            {/* Search Bar Container */}
            <div>
                <div className="search_bar_container">
                    <input type="text" name="searc" id="search" placeholder="Search for books, manuals and authors. . ." />
                    {/* Search Icon */}
                    <div className="icon_style search_icon">
                        <ImSearch />
                    </div>
                </div>
            </div>
            <div>
                {/* Sign up Container */}
                <div>
                    {isSignIn?
                        <button>Sign in</button>
                        :
                        <div className="user_detail_container">
                            <div className="username_container">
                                <p>Mbianou bradon</p>
                            </div>
                            {/* Person Icon */}
                            <div className="icon_style">
                                <RxPerson />
                            </div>
                        </div>
                    }
                </div>
            </div>
        </nav>
    )
}