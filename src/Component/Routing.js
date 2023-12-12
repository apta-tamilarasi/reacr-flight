import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Axios from "./Axios.js"
import Details from "./Details.js"


const Routing=()=>{
    return <BrowserRouter>
    <Routes>
        <Route path="/" element={<Axios />}></Route>
        <Route path="/details" element={<Details/>} />
    </Routes>
    </BrowserRouter>

}

export default Routing