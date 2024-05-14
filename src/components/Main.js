import React from "react";
import Skeleton1 from "./Skeleton1";
import Leftblock from "./Leftblock";
import Modal from "./Modal";


export default function Main({weather, isLoading, isVisible, changeVisible}) {
    return (
        <div className="main">
            {isLoading ? 
            (<div className="main__wrapper">
                <Skeleton1/>
            </div>) : 
            (<div className="main__wrapper">
                <Leftblock weather={weather}/>
                <div className="main__block main__block_right">
                    <div>{Math.floor(weather.main.temp_max - 273.3)}&deg;C</div>
                </div>
            </div>)}
            <div className="main__details">More details</div>
            {isLoading ? <Skeleton1/> : (<div className="main__details-wrapper">
                <div>Feels like: {Math.floor(weather.main.feels_like - 273.3)}&deg;C</div>
                <div>Wind speed: {weather.wind.speed} mph</div>
                <div>Visibility: {weather.visibility}</div>
            </div>)}
            {isVisible && <Modal changeVisible={changeVisible}/>}
        </div>
    )
}