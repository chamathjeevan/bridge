import React from 'react';
import '../Components/Material.css';


function Material() {
    return (
        <div className="row pl-5 pt-3">
            <div className="col-11 form-box mt-2 mb-4">
                <div className="float-right">
                    <button type="button" class="btn btn-line-primary-bridge " data-toggle="modal" data-target=".bd-example-modal-lg" >Add</button>
                </div>
            </div>


            <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Create Material</h5>

                        </div>
                        <div class="modal-body">

                            <div className="row pr-3 pl-3">

                                <div className="col-6 form-box mt-2">
                                    <label for="exampleFormControlInput1">Material ID</label>
                                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Material ID"></input>
                                </div>

                                <div className=" col-6 form-box mt-2">
                                    <label for="exampleFormControlInput1">Material Name</label>
                                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Material Name"></input>
                                </div>

                                <div className=" col-6 form-box mt-2">
                                    <div class="form-group">
                                        <label for="exampleFormControlSelect1">Material Type</label>
                                        <select class="form-control" id="exampleFormControlSelect1">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>
                                    </div>
                                </div>

                                <div className=" col-6 form-box mt-2">
                                    <div class="form-group">
                                        <label for="exampleFormControlSelect1">Material Origin</label>
                                        <select class="form-control" id="exampleFormControlSelect1">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>
                                    </div>
                                </div>

                                <div className=" col-6 form-box mt-2">
                                    <div class="form-group">
                                        <label for="exampleFormControlSelect1">Unit of Measure </label>
                                        <select class="form-control" id="exampleFormControlSelect1">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>
                                    </div>
                                </div>

                                <div className=" col-6 form-box mt-2">
                                    <div class="form-group">
                                        <label for="exampleFormControlSelect1">Unit of Measure </label>
                                        <select class="form-control" id="exampleFormControlSelect1">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>
                                    </div>
                                </div>

                                <div className=" col-6 form-box mt-2">
                                    <label for="exampleFormControlSelect1">Unit of Measure </label>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked></input>
                                        <label class="form-check-label" for="exampleRadios1">
                                            yes</label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"></input>
                                        <label class="form-check-label" for="exampleRadios2">
                                            No</label>
                                    </div>
                                </div>
                                <div className=" col-6 form-box mt-2">
                                    <div class="form-group">
                                        <label for="exampleFormControlSelect1">Cargo Type </label>
                                        <select class="form-control" id="">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>
                                    </div>
                                </div>
                                <div className=" col-12 form-box mt-2">
                                    <hr></hr>
                                    <h5 className="pb-3">HS Code</h5>
                                    <div className="row">

                                        <div className=" col-4">
                                            <label for="exampleFormControlInput1">Client Name</label>
                                            <input type="email" class="form-control" id="" placeholder="Material ID"></input>

                                        </div>

                                        <div className=" col-4">
                                            <label for="exampleFormControlInput1">HS Code</label>
                                            <input type="email" class="form-control" id="" placeholder="Material ID"></input>

                                        </div>

                                        <div className=" col-4">
                                            <div class="form-group">
                                                <label for="exampleFormControlSelect1">Priority</label>
                                                <select class="form-control" id="">
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className=" col-12 form-box mt-2">
                                    <hr></hr>
                                    <h5 className="pb-3">Regulatory Approval</h5>
                                    <div className="row">

                                        <div className=" col-2">
                                            <label for="exampleFormControlInput1">Reference / Test </label>
                                            <input type="email" class="form-control" id="" placeholder="Reference / Test"></input>

                                        </div>

                                        <div className=" col-3">
                                            <label for="exampleFormControlInput1">Aproval Obtaining Stage</label>
                                            <input type="email" class="form-control" id="" placeholder="Aproval Obtaining Stage"></input>

                                        </div>
                                        <div className=" col-2">
                                            <label for="exampleFormControlInput1">Institute Name</label>
                                            <input type="email" class="form-control" id="" placeholder="Institute Name"></input>

                                        </div>
                                        <div className=" col-2">
                                            <label for="exampleFormControlInput1">Sample Required</label>
                                            <input type="email" class="form-control" id="" placeholder="Sample Required"></input>

                                        </div>
                                        <div className=" col-2">
                                            <label for="exampleFormControlInput1">Release Time Days</label>
                                            <input type="email" class="form-control" id="" placeholder="Release Time Days"></input>

                                        </div>

                                    </div>
                                </div>

                                <div className=" col-12 form-box mt-2">
                                    <hr></hr>
                                    <h5 className="pb-3">Trade Agreements</h5>
                                    <div className="row">

                                        <div className=" col-4">
                                            <label for="exampleFormControlInput1"> Agreement Type</label>
                                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Agreement Type"></input>

                                        </div>

                                        <div className=" col-4">
                                            <label for="exampleFormControlInput1">Application Tarriff</label>
                                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Application Tarriff"></input>

                                        </div>

                                        <div className=" col-4">
                                            <div class="form-group">
                                                <label for="exampleFormControlSelect1">Document</label>
                                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Document"></input>

                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>

                        </div>
                        <div class="modal-footer">

                            <button type="button" class="btn btn-primary-bridge-close" data-dismiss="modal">Cancel</button>
                            <button type="button" class="btn btn-primary-bridge ">Save </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-lg-11 table-wraper">
                <table class="table table-hover">
                    <thead class="material-table-th">
                        <tr>
                            <th scope="col">Colum 1</th>
                            <th scope="col">Colum 2</th>
                            <th scope="col">Colum 3</th>
                            <th scope="col">Colum 4</th>
                            <th scope="col">Colum 5</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Data</td>
                            <td>Data</td>
                            <td>Data</td>
                            <td>Data</td>
                            <td>Data</td>

                        </tr>
                        <tr>
                            <td>Data</td>
                            <td>Data</td>
                            <td>Data</td>
                            <td>Data</td>
                            <td>Data</td>
                        </tr>
                        <tr>
                            <td>Data</td>
                            <td>Data</td>
                            <td>Data</td>
                            <td>Data</td>
                            <td>Data</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>

    );
}

export default Material;

