import React from 'react';

import FormComp from "./FormComp";
import { connect } from 'react-redux';

import { setAccount, removeAccount } from '../actions';
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
                   <span><h3>Account Options:</h3></span>
                    <form >
                        <div className="">  <input type={"submit"} className="form-control btn btn-success" name={"edit"} value={"edit"} onClick={event => this.setAccount((id))}/></div>
                        <div className="">  <input type={"submit"} className="form-control btn btn-danger" name={"delete"} value={"delete"} onClick={event =>  props.removeAccount(id)    }/></div>
                    </form>
                </div>

            </div>
        </div>
    </div>

    );
};

export default connect(null, { setAccount, removeAccount })(Scalar);
