import React, {useEffect, useState} from 'react';
import Places from '../places/Places';
import Shortlist from '../shortlist/Shortlist';
import './MainBody.css'
const MainBody=() => {
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

    const addToShortList=place => {
        //checking if the place is added beofre or not
        place.count=place.count+1;
        let flag=true;
        let newShortList=[];
        shortlist.forEach(element => {
            if(element.key===place.key) {
                console.log(element.count);
                flag=false;
                newShortList =[...shortlist]
            }
        });
        if(flag===true) {
            newShortList=[...shortlist, place];
        }
        setShortlist(newShortList);

    }

    return (
        <div>
            <div className="main d-md-flex container-fluid">
                <div className="all-places mx-5">
                    {
                        places.map(place => <Places
                            key={place.key}
                            place={place}
                            shortlist={addToShortList}
                        />)
                    }
                </div>
                <div className="shortlist-cart my-5 mx-2">
                    <Shortlist shortlist={shortlist}/>
                </div>
            </div>

        </div>
    );
};

export default MainBody;