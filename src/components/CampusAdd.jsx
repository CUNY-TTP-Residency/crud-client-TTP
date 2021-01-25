import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { connect } from 'react-redux';
import { getAllCampuses } from '../redux/reducers';



class CampusAdd extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            address: '',
            description: '',
            ImgUrl : 'https://th.bing.com/th/id/OIP.MzaYsaBOJ3JeXj593w2w1QHaE7?pid=Api&rs=1',
        }
        this.handleName = this.handleName.bind(this);
        this.handleAddress = this.handleAddress.bind(this);
        this.handleDescription = this.handleDescription.bind(this);
        this.createCampus = this.createCampus.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleName(event){
        event.preventDefault();
        this.setState({
            name: event.target.value
        });
    }
    
    handleAddress(event){
        event.preventDefault();
        this.setState({
            address: event.target.value
        });
    }

    handleDescription(event){
        event.preventDefault();
        this.setState({
            description: event.target.value
        });
    }

    onSubmit(event){
        
       const addCampus = {
           name  : this.state.name,
           address: this.state.address,
           description : this.state.address,
           ImgUrl : this.state.ImgUrl
       }

       this.createCampus(addCampus);
    }

    createCampus = async (obj) => {
        
       let res = axios.post('http://localhost:8080/api/campuses', obj)
       .then((res) =>{
           console.log(res.data);
       })
       .catch((error) =>{
           console.log(error);
       }
       )
       {this.setState({
           name: '',
           address: '',
           description: ''
       })}
    }

    render(){
        return(
            <div>
            <form onSubmit = {this.onSubmit}>
            <label>
            Campus Name:
            <input type = 'text' onChange = {this.handleName}/>
            </label>
            <label>
            Campus Address:
            <input type = 'text' onChange = {this.handleAddress}/>
            </label>
            <label>
            Campus Description:
            <textarea type = 'text' placeholder = "Tell us about the campus..." onChange = {this.handleDescription}/>
            </label>
            <input type = 'submit' value = 'Add'/>
            </form>
            </div>
        )
    }
}

CampusAdd.propTypes = {
    name : PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    description: PropTypes.string,
};
export default CampusAdd;