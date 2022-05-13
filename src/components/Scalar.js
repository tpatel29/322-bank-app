import React from 'react';

import FormComp from "./FormComp";

const Scalar = (props) => {
    const { name, balance, id } = props;
    const hrefLocation = "/accounts/" + id

    return (
    <div>
        <div className="col-lg-12">
            <div className="card ">
                <div className="card-body">
                <div><a href={hrefLocation}><h4>{ name  }</h4></a></div>
                <span className="">
                <p>{ balance }</p>
                </span>
                    <FormComp acc_id={id}></FormComp>
                </div>

            </div>
        </div>
        <div className="col-lg-12">
            <div className="card ">
                <div className="card-body">
                   <span><h3>Account Options:</h3> <button className="form-control btn btn-success" >Edit Account</button> <button className=" form-control btn btn-danger">Delete Account</button></span>

                </div>

            </div>
        </div>
    </div>

    );
};

export default Scalar;
