import React from 'react';
import ShortlistDetails from '../ShortlistDetails/ShortlistDetails';

import './Shortlist.css'
const Shortlist=(props) => {
    const {shortlist}=props;
    console.log(shortlist);
    let grandTotal=0;
    shortlist.forEach(element => {
        grandTotal=grandTotal+element.cost*element.count;
    });
    let trips=0;
    shortlist.forEach(element => {
        trips=trips+element.count;
    });

    return (
        <div className='shortlist-container'>
            <h3>Shortlist</h3>
            <h6>Total Selected unique Places: {shortlist.length}</h6>
            <h6>Total Selected Trips: {trips} </h6>
            <div className="row">
                  <div className="col-md-5">
                    <p>Place(count)</p>
                </div>
                <div className="col-md-5">
                    <p>count*cost</p>
                </div>
                <div className="col-md-2">
                    <p>total</p>
                </div>
            </div>
            {
                shortlist.map(eachPlace => <ShortlistDetails
                    key={Math.random()}
                    placeName={eachPlace.placeName}
                    cost={eachPlace.cost}
                    count={eachPlace.count}
                    place={eachPlace}
                />)
            }
            <hr />
            <div className="row">
                <div className="col-md-9">
                    <h2>Grand Total: </h2>
                </div>
                <div className="col-md-3">
                    <h2>{grandTotal}</h2>
                </div>
            </div>



        </div>
    );
};

export default Shortlist;