import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllCampuses } from '../redux/reducers';

import Campus from './Campus';

class CampusDisplay extends Component {
    async componentDidMount(){
        console.log("CAMPUS DISPLAY MOUNTED");
        await this.props.getAllCampuses();
    }

    render() {
        return(
            <>
             {this.props.campuses.map((campus, index) => {
                 return (
                    <Campus 
                    key={index}
                    name={campus.name}
                    imgUrl={campus.imgUrl}
                    address={campus.address}
                    description={campus.description}
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
        campuses: state.campuses 
    };
};

const mapDispatchToProps = (dispatch) => {
    console.log('MAPPING DISPATCH TO PROPS');
    return { 
        getAllCampuses: () => dispatch(getAllCampuses()) 
    };
};

export default connect(mapStateToProp, mapDispatchToProps)(CampusDisplay);