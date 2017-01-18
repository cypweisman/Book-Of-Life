// const React = require('react')
// const PersonCard = require('./PersonCard')
// const Nav = require('./Nav')
// const { object } = React.PropTypes


// const Search = React.createClass({
//   render () {
//     console.log(this.props)
//     return (
//       <div className='container'>
//       <Nav />
//         <div className='persons'>
//           {this.props.route.persons
//             .filter((person) => `${person.name} ${person.music}`
//               .toUpperCase()
//               .indexOf(this.props.searchTerm.toUpperCase()) >=0)
//             .map((person) => (
//             <PersonCard {...person} key={person.person_id} />
//           ))}
//        </div>
//       </div>
//     )
//   }
// })


// module.exports = Search