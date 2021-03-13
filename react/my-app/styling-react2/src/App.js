import logo from "./logo.svg";
import "./App.css";
import SassComponent from "./SassComponent";
import React from "react";

const App = () => {
    // const [message, setMassage] = useState("");

    // useEffect(() => {
    //     console.log("useEffect에옴");
    //     fetch("/api/")
    //         .then((response) => response.text())
    //         .then((message) => {
    //             setMassage(message);
    //         });
    // }, []);
    return (
        <div>
            <h1>안녕</h1>
            <hr />
            <SassComponent />
        </div>
    );
};

export default App;
