import React from 'react';
import '../Components/SupplierCreation.css';

function SupplierCreation() {
    return(
        <div className = "row pl-5 pt-3">
            <div className= "col-11 form-box mt-2 mb-4">
                <div className = "float-right">
                    <button type= "button" class = "btn-line-primary-bridge" data-toggle = "modal" ata-target = ".bd-example-modal-lg" >Add</button>
                </div>
            </div>

            <div class = "modal fade bd-example-modal-lg" tabindex =  "-1" role = "dialog" aria-labelledby = " myLargeModalLabel" area-hidden= "true">
                <div class = "modal-dialog modal-lg" role="document">
                    <div class= "modal-content">
                        <div class = "modal-header">
                            <h5 class ="modal-title" id = "SupplierCreation">Supplier Creation</h5>
                        </div>

                        <div class = "modal-body">

                         <div className="SupCreateForm">     


                            
                                    <div className = "SupCreate">
                                        <label for = "SupName">Supplier Name</label>
                                        <input type = "name" class = "form-control" id= "SupName" placeholder= "Supplier Name"></input>
                                    </div>

                                    <div className = "SupCreate">
                                        <label for = "SupAddress">Supplier Address</label>
                                        <input type = "name" class = "form-control" id = "SupAddress" placeholder= "Supplier Address"></input>
                                    </div>

                                    <div className = "SupCreate">
                                        <label for = "NSPort">Nearest Sea Port</label>
                                        <input type = "name" class = "form-control" id = "NSPort" placeholder = "Nearest Sea Port" ></input>
                                    </div>

                                    <div className = "SupCreate">
                                        <label for = "NAPort" > Nearest Air Port</label>
                                        <input type = "name" class = "form-control" id ="NAPort" placeholder = "Nearest Air Port"></input>
                                        
                                    </div>

                                    <div className= "SupCreate">
                                        <label for = "SFTTime">Sea Freight Transit Time</label>
                                        <input type = "name" class = "form-control" id = "SFTTime" placeholder = "Sea Freight Transit Time"></input>
                                    </div>

                                    <div className = "SupCreate">
                                        <label for = "AFTTime">Air Freight Transit Time</label>
                                        <input type = "name" class = "form-control" id = "AFTTime" placeholder = "Air Freight Transit Time"></input>
                                    </div>

                                    <div className = "SupCreate">
                                        <label for = "SWebSite">Supplier Web Site Name</label>
                                        <input type = "name" class = "form-control" id = "SWebSite" placeholder = "Supplier Web Site Name"></input>   
                                    </div>

                                    <div className = "SupCreate">
                                        <label for = "link">Link to Supplier's catalouges</label>
                                        <input type = "name" class =  "form-control" id = "link" placeholder =  "Link to Supplier's catalouges"></input>
                                    </div>    

                                    {
                                        //tables
                                    }       

                                    <div className = "SupCreateTable">
                                        <hr>
                                        </hr>

                                        <div className = "row" >
                                            <div className = "SupTable">
                                                <label for = "ClientName">Client Name</label>
                                                <input type = "name" class = "form-control" id ="" placeholder ="Client Name"  ></input>
                                            </div>

                                            <div className = "SupTable">
                                                <label for = "Incoterm">Incoterm</label>
                                                <input type = "name" class = "form-control" id = "" placeholder = "Incoterm" ></input>

                                            </div>

                                            <div className  = "SupTable">
                                                <label for = "PaymentTerm">Payment Term</label>
                                                <input type = "name" class = "form-control" id = "" placeholder = "PaymentTerm"></input>
                                                
                                            </div>

                                            <div className = "SupTable">
                                                <label for = "Bank" >Bank</label>
                                                <input type = "name" class = "form-control" id = "" placeholder = "Bank"></input>
                                                
                                            </div>

                                            <div className = "SupTable">
                                            <div class="form-group">
                                                <label for = "mode" >Default Transport Mode</label>
                                                <select class="form-control" id="">
                                                    <option>FCL</option>
                                                    <option>LCL</option>
                                                    <option>AIR</option>
                                                    <option>COURIER</option>
                                                    <option>LOCAL</option>
                                                </select>
                                            </div>
                                               
                                            </div>
                                        </div>

                                          {
                                            //2nd table
                                          }


                                        <div className = "SupTable2">
                                                <label for = "ContactPerson"> Contact Person</label>
                                                <input type = "name" class = "form-control" id = "" placeholder = "ContactPerson" > </input>
                                        </div>

                                        <div className = "SupTable2">
                                            <label for = "OurClient"> Our Client</label>
                                            <input type = "name" class = "form-control" id = "" placeholder = "OurClient" ></input>
                                        </div>

                                        <div className = "SupTable2">
                                            <label for = "Phone">Telephone </label>
                                            <input type = "name" class ="form-control"  id = "" placeholder = "Telephone"></input>
                                        </div>

                                        <div className = "SupTable2">
                                            <label for = "mobile">Mobile</label>
                                            <input type = "name" class = "form-control" id = "" placeholder = "Mobile"></input>
                                        </div>

                                        <div className = "SupTable2">
                                            <label for = "email">E-Mail</label>
                                            <input type = "name" class = "form-control" id = ""placeholder = "E-Mail"></input>
                                        </div>

                                       
                            </div>
                            </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default SupplierCreation;
