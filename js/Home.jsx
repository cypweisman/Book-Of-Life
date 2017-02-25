const React = require('react')
const PersonCard = require('./PersonCard')

  class Home extends React.Component {
    constructor() {
      super();
      this.state = {
        people: [],
        offSet: 0,
      };
    }

    componentWillMount() {
      this.getPeople();
    }

    getPeople(){
      for(var i=this.state.offSet; i < this.state.offSet + 3; i++){
        this.setState({
          people: this.state.people.concat(this.props.persons[i]),
        });
      }
      offSet: this.state.offSet+=3
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