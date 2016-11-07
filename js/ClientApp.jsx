const React = require('react')
const ReactDOM = require('react-dom')
const Search = require('./Search')
const { Router, Route, IndexRoute, hashHistory } = require('react-router')
const { persons } = require('../public/data')
console.log({ persons })

const App = React.createClass({
  assignPerson (nextState, replace) {
      const personArray = persons.filter((person) => person.person_id === nextState.params.id )

    console.log('personState', personState, 'personArray', personArray)

    if (personArray.length <1) {
      return replace('/')
    }

    Object.assign(nextState.params, personArray[0])
    return nextState
    },


  render () {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Search} persons={persons} >
        </Route>
      </Router>
    )
  }
})

ReactDOM.render(<App />, document.getElementById('app'))