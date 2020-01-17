import React, {useState, useEffect} from "react";
import "./styles.css";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import BlockList from './components/blocklist/blocklist';
import BlockDetail from './components/blockdetail/blockdetail';
import LatestBlock from './components/latestblock/latestblock';
import TransactionDetail from './components/blockdetail/TransactionDetail';

export default function App() {
  return (
    <Router>
      <div className="App">
      <nav className="navbar navbar-dark bg-dark ">
        <a className="navbar-brand " href="#">
          <div className="h1">Chainyard Coding Challenge</div>
        </a>
      </nav>
        <div className="container-fluid">
          <Switch>
            <Route path="/" exact  component={BlockList} />
            <Route path="/block-detail/:id" component={BlockDetail} />
            <Route path="/latest-block" component={LatestBlock} />
            <Route path="/transactions/:id" component={TransactionDetail}/>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

