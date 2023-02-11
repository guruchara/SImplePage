import React from "react"
import { isMobile } from 'react-device-detect';
import HomePage from "./HomePage";
import HomePageMobile from "./HomePageMobile";

const Main = () => {
    return (
        <>
            {!isMobile ? <HomePage /> : <HomePageMobile />}
        </>
    )
}

export default Main;