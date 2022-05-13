import React from 'react';
import { Link } from 'react-router-dom';

class PageTabs extends React.Component {
  state = { currentPage: '/' }

  isActiveTab(tabName) {
    return (tabName === this.state.currentPage) ? 'nav-link active' : 'nav-link';
  }

  onTabClick(event, tabName) {
    this.setState({ currentPage: tabName })
  }

  render () {
    return (


    <nav className={"navbar navbar-expand-lg navbar-light bg-secondary"}>
          <div className={"navbar-brand"} href="/">MY BANK</div>
          <div className={"collapse navbar-collapse"} id="navbarNavDropdown">
            <ul className={"navbar-nav"}>
              <li className={"nav-item active"}>
                 <Link className={this.isActiveTab('/')} to="/" onClick={event => this.onTabClick(event, '/')}> Accounts </Link>              </li>
              <li className={"nav-item"}>
                 <Link className={this.isActiveTab('/transactions')} to="/transactions" onClick={event => this.onTabClick(event, '/transactions')}>Transactions </Link>               </li>
              <li className={"nav-item"}>
                  <Link className={this.isActiveTab('/add-account')} to="/add-account" onClick={event => this.onTabClick(event, '/add-account')}> Add Account </Link>              </li>
            </ul>
          </div>
        </nav>
    )
  }

};

export default PageTabs;
