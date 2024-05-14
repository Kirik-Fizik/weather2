import React from "react";
import { Outlet } from "react-router-dom";
import searchImage from '../img/search.png';
import Main from "./Main";

export default function Layout({changeCity, cityAndWeather, weather, city, isLoading, isVisible, changeVisible }) {

    return (
        <div className="layout">
            <div className="layout-wrapper">
            <input className="layout__input" placeholder="Search cities..." onChange={changeCity}></input>
            <div className="layout__clear" onClick={() => {
                document.getElementsByClassName('layout__input')[0].value = "";
                document.getElementsByClassName('layout__input')[0].focus();
            }}>X</div>
            <button className="layout__button-search" onClick={cityAndWeather}>
                <img src={searchImage} alt='img' className="layout__img"></img>
            </button>
            </div>
            <Main weather={weather} city={city} isLoading={isLoading} isVisible={isVisible} changeVisible={changeVisible}/>
            <Outlet/>
        </div>
    )
}