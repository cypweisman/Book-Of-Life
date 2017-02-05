const React = require('react')
const PersonCard = require('./PersonCard')

  export default class Home extends React.Component {
  render(){
    console.log(this.props)
    return (
    <div>
      <ul>
        {this.props.persons.map(function(person, index){
          return (
            <li style={{display:'inline-block'}} key={person.person_id}>
              <PersonCard name={person.name} photo={person.photo} person_id={person.person_id}/>
            </li>
            )
        })}
      </ul>
    </div>
    )
  }
}


module.exports = Home