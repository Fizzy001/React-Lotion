import React, { useState, useRef} from "react";
import Components from "./Components";
import { Outlet } from "react-router-dom";

function Navbar(){
    const [show, toggleShow] = React.useState(true);
    return(
        <>
            <header>
                <nav>
                    <label onClick={() => toggleShow(!show)}>&#9776;</label>
                    <div id="navigate">
                        <h1>Lotion</h1>
                        <div id="subtext">Like Notion, but worse</div>
                    </div>
                </nav>
            </header>
            <body>
                <div class="split">
                    {show && <div id = "left">
                        <nav>
                            <h2>Notes</h2>
                            <label id="plus">&#43;</label>
                        </nav>
                    </div>}
                    <div id = "right">{() => Components}</div>
                </div>
            </body>
        </>
    )
};

export default Navbar;

