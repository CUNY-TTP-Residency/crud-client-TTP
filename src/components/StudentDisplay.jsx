import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllStudents } from '../redux/reducers';

import Student from './Student';

class StudentDisplay extends Component {
    async componentDidMount(){
        console.log("STUDENT DISPLAY MOUNTED");
        await this.props.getAllStudents();
    }

    render() {
        return(
            <>
             {this.props.students.map((student, index) => {
                 return (
                    <Student 
                    key={index}
                    name={student.name}
                    gpa={student.gpa}
                    />
                 )
             })}
            </>
        )
    }
}

const mapStateToProp = (state) => {
    console.log('MAPPING STATE TO PROPS');
    return { 
        students: state.students 
    };
};

const mapDispatchToProps = (dispatch) => {
    console.log('MAPPING DISPATCH TO PROPS');
    return { 
        getAllStudents: () => dispatch(getAllStudents()) 
    };
};

export default connect(mapStateToProp, mapDispatchToProps)(StudentDisplay);