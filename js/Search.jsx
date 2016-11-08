const React = require('react')
const PersonCard = require('./PersonCard')
const Nav = require('./Nav')
const { object } = React.PropTypes
const data = require('../public/data')

const Search = React.createClass({
  getInitialState() {
    return {
      searchTerm: ''
    }
  },
  propTypes: {
    route: object
  },
  handleSearchTermChange (searchTerm) {
    this.setState({ searchTerm: searchTerm })
  },
  render () {
    return (
      <div className='container'>
      <Nav />
        <div className='persons'>
          {data.persons
            .filter((person) => `${person.name} ${person.music}`
              .toUpperCase()
              .indexOf(this.state.searchTerm.toUpperCase()) >=0)
            .map((person) => (
            <PersonCard {...person} key={person.person_id} />
          ))}
       </div>
      </div>
    )
  }
})


module.exports = Search