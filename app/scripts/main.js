import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import ReactDOM from 'react-dom';
import App from './components/App';
import Landing from './components/Landing';
import Buzz from './components/Buzz';
import Sting from './components/Sting';
import Search from './components/Search';


const router = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Landing}/>
    <Route path="/buzz" component={Buzz}/>
    <Route path="/sting" component={Sting}/>
    <Route path="/search" component={Search}/>
    </Route>
  </Router>
);

ReactDOM.render(router, document.getElementById('container'));


//Future Routes
// <Route path="/search" component={Search}/>
// <Route path="/sting" component={Sting}/>
// <Route path="/buzz" component={Buzz}/>
// <Route path="/reviews" component={Reviews}/>
