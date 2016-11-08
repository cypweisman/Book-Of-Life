const React = require('react')
const ReactDOM = require('react-dom')
const Search = require('./Search')
const Layout = require('./Layout')
const Details = require('./Details')
const { Router, Route, IndexRoute, hashHistory } = require('react-router')
const { persons } = require('../public/data')

const App = React.createClass({
  assignPerson (nextState, replace) {
      const personArray = persons.filter((person) => person.person_id === nextState.params.id )

    if (personArray.length <1) {
      return replace('/')
    }

    Object.assign(nextState.params, personArray[0])
    return nextState
    },


  render () {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Layout} >
          <IndexRoute component={Search} persons={persons} />
        <Route path='/details/:id' component={Details} onEnter={this.assignPerson} />
        </Route>
      </Router>
    )
  }
})

ReactDOM.render(<App />, document.getElementById('app'))