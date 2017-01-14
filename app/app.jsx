//Every react Component needs a render method
const React = require('react')
const ReactDOM = require('react-dom')
const Main = require('Main')
const Timer = require('Timer')
const Countdown = require('Countdown')

//Below is es6 object destructuring
const {Route, Router, IndexRoute, hashHistory} = require('react-router')

//Load foundation
$(document).foundation()
//App css
require('style!css!sass!applicationStyles')

  ReactDOM.render(
    <Router history={hashHistory}>
      <Route path='/' component={Main}>
      <Route path='timer' component={Timer}/>
      <Route path='countdown' component={Countdown}/>
      <IndexRoute component={Timer}/>
      </Route>
    </Router>,
    document.getElementById('app')
  )
