import React from 'react';
import '../Components/Sidebar.css';




function Dashboard() {
  return (
    <div className="container-fluid p-0 login">
      <div className="row  ">
        <div className="col-lg-12">
        <nav id="sidebar">
       

        <ul class="list-unstyled components">
        <li className="pb-2">
                <a href="#"> <span className="dashboard"></span> Dashboard</a>
            </li>
            {/* <li class="active">
                <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Home</a>
                <ul class="collapse list-unstyled" id="homeSubmenu">
                    <li>
                        <a href="#">Dashboard</a>
                    </li>
                  
                </ul>
            </li> */}
            <li className="pb-2">
                <a href="#"> <span className="material"></span> Material</a>
            </li>

            {
                //add SuppliarCreationWEbForm
            }
            <li className = "pb-2">
                <a href = "#1"><span className = "suppliercreation"></span>SupplierCreation</a>

            </li>

        </ul>
    </nav>
        </div>
        </div>
    </div>


  );
}

export default Dashboard;
