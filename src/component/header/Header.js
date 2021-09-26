import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div>
            <nav className="navbar navigation">
          <div className="container-fluid">
            {/* Title (website Name announced) */}
            <h1 className="px-5 fw-bold"> <span id='go'>Go BD Go </span><span id='travels'>Travels</span></h1>
            <form className="px-5">
              {/* BUdget is given */}
              <h3 id='budget'>Make Your Tour Plan on this budget: <span id='amount-budget'> 150000</span>  Taka</h3>
            </form>
  </div>
</nav>


        </div>
    );
};

export default Header;