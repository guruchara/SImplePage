import React from "react"
import { isMobile } from 'react-device-detect';
import HomePage from "./HomePage";

const Main = () => {
    return (
        <>
            {!isMobile ? <HomePage /> : <></>}
        </>
    )
}

export default Main;