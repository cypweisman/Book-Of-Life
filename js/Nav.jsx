const React = require('react')
const { Link } = require('react-router')

const Nav = React.createClass({
  render () {
    return (
      <header className='navbar navbar-default'>
        <h1 className='brand'>
          <Link to='/' className='brand-link'>
          Book Of Life
          </Link>
        </h1>
      </header>
    )
  }
})

module.exports = Nav