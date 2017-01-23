const React = require('react')
const ReactDOM = require('react-dom')
const Layout = require('./Layout')
const Details = require('./Details')
const Home = require('./Home')
const { Router, Route, IndexRoute, hashHistory } = require('react-router')
const { persons } = require('../public/data')


const App = React.createClass({
  // assignPerson (nextState, replace) {
  //     const personArray = persons.filter((person) => person.person_id === nextState.params.id )

  //   if (personArray.length <1) {
  //     return replace('/')
  //   }

  //   // Object.assign(nextState.params, personArray[0])
  //   nextState.params.person = personArray[0]
  //   return nextState
  //   },
  //new comment


  render () {
  {/* this is a comment. Use curly braces whenever you want to use normal js in jsx */}
  console.log("run me")
    return (
      <Router history={hashHistory}>
        <Route path='/Book-Of-Life' component={Layout} >
          <IndexRoute component={Home} />
          <Route path='/details/:id' component={Details} onEnter={this.assignPerson} />
        </Route>
      </Router>
    )
  }
})

ReactDOM.render(<App />, document.getElementById('app'))