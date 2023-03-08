import React, { useState } from "react";
import "./App.scss";


function App() {
    const [active, setActive] = useState<string>('t-0');
    const handleClick = (e: any) => {
        const index = e.target.id;
        if (index !== active) {
            setActive(index);
        }
    };
    return (
        <div className="App">
            <h1>Tabs Demo <img src={'/assets/images/avatar.jpg'} width={30} /></h1>
            <ul className="myapp">
                <li onClick={handleClick} style={{border: active === 't-0' ? "1px solid #333" : "none"}} id={`t-0`}>
                    Tab1
                </li>

                <li onClick={handleClick} style={{border: active === 't-1' ? "1px solid #333" : "none"}} id={`t-1`}>
                    Tab2
                </li>
            </ul>
            <>
                <div style={{display: active === 't-0' ? "block" : "none"}}>
                    <h3>Content 1</h3>
                </div>
                <div style={{display: active === 't-1' ? "block" : "none"}}>
                    <h3>Content 2</h3>
                </div>
            </>
        </div>
    );
}



export default App;
