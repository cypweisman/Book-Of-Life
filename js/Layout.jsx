const React = require('react')
const Nav = require('./Nav')

const Layout = (props) => (
  <div className='app-container'>
    <Nav />
    {props.children}
  </div>
)

const { element } = React.PropTypes

Layout.propTypes = {
  children: element.isRequired
}

module.exports = Layout