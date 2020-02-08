import React, { Suspense } from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './main/Main.jsx';

import "./root.scss";
import styles from "./app.mod.scss";

const App = function() {
  return(
    <BrowserRouter>
      <div id='app' className={styles.wrapper}>
        <Switch>
          <Route path='/' component={Main} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App;