import React from 'react';

import TeamList from "./TeamList";
import InitiativeList from "./InitiativeList";

const App = () => {
  return (
    <div className="container">
      <div className="row">

        <div className="col-sm-4">
          <TeamList />
        </div>

        <div className="col-sm-4">
          <InitiativeList />
        </div>

        <div className="col-sm-4">
          <TeamList />
        </div>

      </div>
    </div>
  );
};

export default App;