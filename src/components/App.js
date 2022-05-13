import React from 'react';
import '../styles.css';
import { BrowserRouter, Routes, Route, useParams  } from 'react-router-dom';
import getAccounts from "../PostAPI.js"
import getTransactions from "../PostAPI2.js"
import HomePage from './HomePage';
import AccountPage from './AccountPage';
import EditPage from './EditPage';
import TransactionPage from './TransactionPage';
import AddAccountPage from "./AddAccountPage";

const App = (prop) => {
  return (
    <div className="container">

    <BrowserRouter>
    <nav className={"navbar navbar-expand-lg navbar-light bg-secondary"}>
      <a className={"navbar-brand"} href="/">MY BANK</a>
      <div className={"collapse navbar-collapse"} id="navbarNavDropdown">
        <ul className={"navbar-nav"}>
          <li className={"nav-item active"}>
            <a className={"nav-link"} href="/">Accounts <span className={"sr-only"}>(current)</span></a>
          </li>
          <li className={"nav-item"}>
            <a className={"nav-link"} href="/transactions">Transactions</a>
          </li>
          <li className={"nav-item"}>
            <a className={"nav-link"} href="/add-account">Add Account</a>
          </li>
        </ul>
      </div>
    </nav>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/accounts/:id" element={<AccountPage />} />
            <Route path="/Transactions" element={<TransactionPage />} />
            <Route path="/accounts/${id}/edit" component={EditPage} />
            <Route path="/add-account" element={<AddAccountPage />} />
        </Routes>
    </BrowserRouter>

    </div>
  );
};


export default App;
