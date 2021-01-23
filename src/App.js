import { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import axios from 'axios';
import './App.css';

import Homepage from './components/Homepage'
import CampusDisplay from './components/CampusDisplay';
import StudentDisplay from './components/StudentDisplay';

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      campuses: [],
      students: [],
    };
  }
  
  async componentDidMount() {
    try{
      console.log("Mounted")
      let data = await axios.get('http://localhost:8080/api/campuses');
      this.setState({ campuses: data.data.campuses });
      console.log(this.state.campuses)
    }catch (error) { console.error(error) };
  }

  render(){
    return (
      <Router>
          <div>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/campuses">Campuses</Link></li>
              <li><Link to="/students">Students</Link></li>
            </ul>

          <hr/>

          <Switch>
            <Route exact path="/" component={Homepage}/> 
            <Route path='/campuses'> <CampusDisplay campuses={this.state.campuses}/></Route>
            <Route path='/students'> <StudentDisplay students={this.state.students}/></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}