import React from 'react';
import './Places.css'
const Places=(props) => {
    // console.log(props.place);
    //destructuring to get object file of single place
    const {place}=props;
    const shortlist=props.shortlist;
    //destructuring for single value from object
    const {placeName, speciality, distance, transport, cost, image, season}=place;
    return (
        <div>
            <div className="single-place text-center m-3">
                <img src={image} alt="place"/>
                <h2>{placeName}</h2>
                <h4>{speciality}</h4>
                <div className="details mx-5">
                <p>Season: {season}</p>
                <p>Distance From Dhaka: {distance}KM</p>
                <p>Transport: {transport}</p>
                    <p>Estimated cost/person: {cost} taka</p>
                </div>

                <button className='btn btn-secondary' onClick={() => shortlist(place)}><i className="fas fa-hand-pointer"></i> Add To Short List</button>
                <br />
                <i className="fas info-icon fa-info-circle"></i>
                <i className="fab  yt-icon  fa-youtube"></i>
            </div>

        </div>
    );
};

export default Places;