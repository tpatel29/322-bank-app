import React from 'react';

import FormComp from "./FormComp";
const InitiativeItem = (props) => {
  const { name, balance, id } = props;
        const hrefLocation = "/accounts/" + id
        return (
            <div className="col-sm-6">
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
        );
    };

export default InitiativeItem;
