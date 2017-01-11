//Every react Component needs a render method
var React = require('react')
var ReactDOM = require('react-dom')
var Main = require('Main')

//Below is es6 object destructuring
var {Route, Router, IndexRoute, hashHistory} = require('react-router')

//Load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation()
//App css
require('style!css!sass!applicationStyles')

  ReactDOM.render(
    <Router history={hashHistory}>
      <Route path='/' component={Main}>
      
      </Route>
    </Router>,
    document.getElementById('app')
  )
