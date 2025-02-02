import React from 'react';
import '../Components/Header.css';
import bridge from '../img/BRIDGE.svg'
import Notifications from '../img/Notifications.svg'
import Profile from '../img/Profile.svg'


function Header() {
  return (
    <div classNameName=" p-0">
      <div classNameName="row">
        <div classNameName="col-lg-12">
          <nav className="navbar navbar-expand-lg navbar-dark bg-white static-top nav-camms pl-0 pr-0">

            {/* <img src={Menu}  height="17" width="23"/> */}
            <a className="navbar-brand logo pl-3" href="#" >  <img className="" src={bridge} /></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item ">
                  <a className="nav-link pr-3" href="#">
                    <img className="" width="20" src={Notifications} />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link pr-3" href="#" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    
                    <img className="" width="20" src={Profile}  />

                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" >
                      <a class="dropdown-item" href="#">Settings</a>
                      <a class="dropdown-item" href="#">Log Out</a>
                     
                    </div>
                  </a>
                </li>

              </ul>
            </div>
          </nav>
        </div>

      </div>
    </div>


  );
}

export default Header;

