import React, {useEffect, useState} from 'react';
import Places from '../places/Places';
import Shortlist from '../shortlist/Shortlist';
import './MainBody.css'
const MainBody=() => {
    //state declaring
    const [places, setPlaces]=useState([]);
    const [shortlist, setShortlist]=useState([]);
//importing data from JSON file
    useEffect(() => {
    fetch('./places.JSON')
      .then(res => res.json())
      .then(data => {
          setPlaces(data);
    })
    }, [])
//add to shortlist button click handler
    const addToShortList=place => {
        place.count=place.count+1;
        let flag=true;
        let newShortList=[];
        //checking if the place is added beofre or not
        shortlist.forEach(element => {
            if(element.key===place.key) {
                flag=false;
                newShortList =[...shortlist]
            }
        });

        if(flag===true) {
            newShortList=[...shortlist, place];
        }
        setShortlist(newShortList);
    }
    //plan again click handler
    const planAgain=() => {
        shortlist.forEach(element => {
            element.count=0;
        });
        setShortlist([]);
    }

    return (
        <div>
            <div className="main d-md-flex container-fluid">
                {/* Main Section of places */}
                <div className="all-places mx-2">
                    {
                        places.map(place => <Places
                            key={place.key}
                            place={place}
                            shortlist={addToShortList}
                        />)
                    }
                </div>
                {/* Side Cart */}
                <div className="shortlist-cart my-5 mx-2">
                    <Shortlist shortlist={shortlist} planAgain={planAgain}/>
                </div>
            </div>

        </div>
    );
};

export default MainBody;