//const React = require('react')
import React, {Component, Children, cloneElement} from 'react'
const Nav = require('./Nav')
const { persons } = require('../public/data')

export default class Layout extends Component {

//make an function for getInitialState which just be the persons array as is

//then create a function/handler that sets state. pass it to pro
  // handleChangePersons = (updatedPerson) => // set state with new updated persons array

  render () {
    return (
    <div className='app-container'>
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