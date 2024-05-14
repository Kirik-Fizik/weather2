import React from "react";

export default function Leftblock({weather}) {
    let description = weather.weather[0].description;
    let nameClass;
    if (description.includes('few clouds')) {
        nameClass = "main__block_left_fewclouds";
    } else if (description.includes('clear')) {
        nameClass = "main__block_left_clear";
    } else if (description.includes('overcast clouds')) {
        nameClass = "main__block_left_overcastclouds";
    } else if (description.includes('broken clouds')){
        nameClass = "main__block_left_brokenclouds";
    } else if (description.includes('rain')) {
        nameClass = "main__block_left_rain";
    } else if (description.includes('snow')) {
        nameClass = "main__block_left_snow";
    } else {
        nameClass = "main__block_left_weather";
    };
    return (
        <div className={`main__block main__block_left ${nameClass}`}>
            <div>{weather.name}</div>
            <div>{description}</div>
        </div>
    )
}