import React from 'react';
import '../styles.css';
import { BrowserRouter, Routes, Route, useParams, Link  } from 'react-router-dom';
import PageTabs from "./PageTabs.js"
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
    <PageTabs/>
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
