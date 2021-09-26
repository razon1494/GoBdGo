import React from 'react';
import ShortlistDetails from '../ShortlistDetails/ShortlistDetails';

import './Shortlist.css'
const Shortlist=(props) => {
    // Destructuring array from props
    const {shortlist}=props;
    //total trips count
    let trips=0;
    shortlist.forEach(element => {
        trips=trips+element.count;
    });
    // Grand Total Cost Count
    let grandTotal=0;
    shortlist.forEach(element => {
        grandTotal=grandTotal+element.cost*element.count;
    });


    return (
        <div className='shortlist-container'>
            <h3 className='text-center'>Shortlist</h3>
            <br />
            <h6>Total Selected unique Places: <span className='count'> {shortlist.length}</span></h6>
            <h6>Total Selected Trips:<span className='count'> {trips}</span></h6>
            <br />
            {/* Heading of cart list */}
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
                    <h5>Grand Total: </h5>
                </div>
                <div className="col-md-3">
                    <h5>&#2547;{grandTotal}</h5>
                </div>
            </div>
            <div>
                <div className='btn-class'>
                    <button onClick={props.planAgain} className='reload mt-3'>Plan Again</button>
                </div>

            </div>



        </div>
    );
};

export default Shortlist;