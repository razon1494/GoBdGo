import React from 'react';
import './Places.css'
const Places=(props) => {
    //destructuring to get object file of single place
    const {place}=props;
    const shortlist=props.shortlist;
    //destructuring for single value from object
    const {placeName, speciality, distance, transport, cost, image, season}=place;
    return (
        <div>
            <div className="single-place text-center my-3 mx-1">
                <img src={image} alt="place"/>
                <h2>{placeName}</h2>
                <h4>{speciality}</h4>
                <div className="details mx-5">
                <p>Season: {season}</p>
                <p>Distance From Dhaka: {distance}KM</p>
                <p>Transport: {transport}</p>
                    <p>cost/person: {cost} taka</p>
                </div>

                <button className='add-to-list-btn' onClick={() => shortlist(place)}><i className="fas fa-hand-pointer"></i> Add To Short List</button>
                <br />
                <a target="_blank"  href="https://nijhoom.com/best-places-to-visit-in-bangladesh/"><i className="fas info-icon fa-info-circle"></i></a>
                <a target="_blank"  href="https://youtu.be/a45uOtCVES4"><i href="https://youtu.be/a45uOtCVES4" className="fab  yt-icon  fa-youtube"></i></a>

            </div>

        </div>
    );
};

export default Places;