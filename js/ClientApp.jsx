const React = require('react')
const ReactDOM = require('react-dom')
const Layout = require('./Layout')
const Details = require('./Details')
const Home = require('./Home')
const { Router, Route, IndexRoute, hashHistory } = require('react-router')
const { persons } = require('../public/data')


const App = React.createClass({
  render () {
  {/* this is a comment. Use curly braces whenever you want to use normal js in jsx */}
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Layout} >
          <IndexRoute component={Home} />
          <Route path='/details/:id' component={Details} onEnter={this.assignPerson} />
        </Route>
      </Router>
    )
  }
})

ReactDOM.render(<App />, document.getElementById('app'))