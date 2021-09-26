import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div>
            <nav className="navbar navigation">
  <div className="container-fluid">
    <h1 className="px-5 fw-bold"> <span id='go'>Go BD Go </span><span id='travels'>Travels</span></h1>
    <form className="px-5">
      <h3 id='budget'>Your Total Budget: 10000 Taka</h3>
    </form>
  </div>
</nav>


        </div>
    );
};

export default Header;