const React = require('react')
const { Link } = require('react-router')

const Nav = React.createClass({
  render () {
    return (
      <header className='header'>
        <h1 className='brand'>
          <Link to='/' className='brand-link'>
          BookOfLife
          </Link>
        </h1>
        {utilSpace}
      </header>
    )
  }

})