import React from 'react';

const Student = (props) => (
    <div className='student'>
        Name: {props.name} <br/>
        GPA: {props.gpa} <br/>
        <br/>
    </div>
)

export default Student;