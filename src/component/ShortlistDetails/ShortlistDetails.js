import React from 'react';
import './ShortlistDetails.css'
const ShortlistDetails=(props) => {
    //destructuring
    const {placeName, cost, count}=props;
    const individualTotal=cost*count;
    return (
        <div>
            <div className="row calculation-part">
                <div className="col-md-5">
                    <p>{placeName}({count})</p>
                </div>
                <div className="col-md-5">
                    <p>{count}*{cost}</p>
                </div>
                <div className="col-md-2">
                    <p>&#2547;{individualTotal}</p>
                </div>

            </div>

        </div>
    );
};

export default ShortlistDetails;