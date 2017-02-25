const React = require('react')
const PersonCard = require('./PersonCard')

class Home extends React.Component {
    constructor() {
      super();
      this.state = {
        people: [],
        offSet: 0
      };
    }

    componentWillMount() {
      this.getPeople();
    }

    getPeople(){
      var selectedPersons = this.props.persons.slice(this.state.offSet, this.state.offSet + 3);
      var people = this.state.people;

      selectedPersons.forEach(function(person){
        people.push(person);
      }, this);

      this.setState({
        people: people,
        offSet: this.state.offSet+=3
      });


      // for(var i=this.state.offSet; i < (this.state.offSet + 2); i++){
      //   this.setState({
      //     people: this.state.people.push(this.props.persons[i])
      //   });
      // }
    }


  render(){
    console.log(this.state.people)
    return (
    <div>
      <ol>
        {this.state.people.map(function(person, index){
          return (
            <li style={{display:'inline-block'}} key={person.person_id}>
              <PersonCard name={person.name} photo={person.photo} person_id={person.person_id}/>
            </li>
            )
        })}
      </ol>
      <button className="home-btn" ref="query" onClick={ (e) => {this.getPeople(); } } type="button">See More</button>
    </div>
    )
  }
}


module.exports = Home