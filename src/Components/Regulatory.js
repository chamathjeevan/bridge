import react from 'react';
import '../Components/Regulator.css';

function Regulatory() { 
    return (
        <div className = "row pl-5 pt-3">
            <div className = "col-11 form mt-2 mb-4">
                <div>
                    <button type = "button" class ="btn btn-line-primary-bridge" data-toggle = "modal" data-target = ".bd-example-modal-lg">ADD Reg</button>
                </div>
            </div>

            <div class = "modal fade bd-example-modal-lg" tabindex="-1" role = "dialog" aria-labelledby="myLargeModallabel" aria-hidden="true">
                <div class="modal-dialog modal-lg" role = "document">
                    <div class = "modal-content">
                        <div class = "modal-header">
                            <h5 class = "modal-title" id = "exampleModalLabel" > Regulatory Approval

                            </h5>
                        

                        </div>
                        <div class="modal-body">
                            <div className ="col pr-3 pl-3">
                               
                                    <div className="col-6 from-box mt-2">
                                        <label for = "Authority">Authority / Institute Name</label>
                                        <label type = "name" class= "form-control"></label>
                                    </div>

                                    <div className = "col-6 form-box mt-2">
                                        <label for = "RefName">Reference / Test Name</label>
                                        <label type = "name" class = "form-control"></label>
                                    </div>

                                    <div className = "col-6 form-box mt-2">
                                        <label for = "TimeinDays">Release Time In Days</label>
                                        <label type = "name" class = "form-control"></label>
                                    </div>

                                    <div className = "col-6 form-box mt-2">
                                        <label for = "requirment" >Sample Requiremnt </label>
                                        <select class="form-control" id="SampleRequiremnt">
                                            <option>Yes</option>
                                            <option>No</option>
                                            <option>Maybe</option>
                                        </select>
                                    </div>

                                    <div className = "col-6 form-box mt-2">
                                        <label for = "AverageTime" >Average Release Time</label>
                                        <label type = "name" class = "form-control"></label>
                                    </div>

                                    <div className = "col-6 form-box mt-2">
                                        <label for = "ApprovalStage">Approval Obataning Stage</label>
                                        <label type = "name" class ="form-control"></label>
                                    </div>

                                    {
                                        //table
                                    }

                                    <div className = "col-12 from-box mt-2">
                                        <hr>
                                        </hr>
                                    <h5 className= "pb-3">Attachments</h5>
                                    <div className = "row">
                                        <div className = "col-4">
                                            <label for = "DocName">Documents Name</label>
                                            <input type = "name" class = "form-control" id = "" placeholder="Documents Name"></input>
                                        </div>

                                        <div className = "col-4">
                                            <label for = "Description">Description</label>
                                            <input type = "name" class="form-control" id = "" placeholder = "Description"></input>                                     
                                        </div>

                                        <div className = "col-4">
                                            <label for = "Mandatory" >Mandatory</label>
                                            <select class="form-control" id="">
                                                    <option>Yes</option>
                                                    <option>No</option>
                                                    
                                            </select>
                                        </div>
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

export default Regulatory;