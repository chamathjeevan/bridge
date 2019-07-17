import React from 'react';
import '../Components/Dashboard.css';
import Header from './Header';
import Material from './Material';
import Sidebar from './Sidebar';

import SupplierCreation from './SupplierCreation';
import Regulatory from './Regulatory;'



function Dashboard() {
  return (
    <div className="container-fluid p-0 login">
      <div className="row  ">
          <div className="col-lg-12"> 
              <Header></Header>
          </div>
          <div className="col-lg-2 pr-0">
              <Sidebar></Sidebar>
          </div>
        <div className="col-lg-10 content-area">
           
            <Material></Material>   

          <div className = "col-lg-10 content-area">
          <SupplierCreation></SupplierCreation>
          </div>
            
        </div>
        </div>
    </div>


  );
}

export default Dashboard;
