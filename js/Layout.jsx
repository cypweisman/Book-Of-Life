import React, {Component, Children, cloneElement} from 'react'
const Nav = require('./Nav')
const { persons } = require('../public/data')

class Layout extends Component {
  render () {
    return (
    <div className='container'>
      <Nav />
        {cloneElement(Children.only(this.props.children), {persons: persons, handleChangePersons: this.handleChangePersons })}
      {/*{this.props.children}*/}
    </div>
    )
  }
}

// const Layout = (props) => (
//   <div className='app-container'>
//     <Nav />
//     {props.children}
//   </div>
// )

const { element } = React.PropTypes

Layout.propTypes = {
  children: element.isRequired
}

module.exports = Layout