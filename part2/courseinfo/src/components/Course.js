import React from 'react';

const Header = (props) =>{
    return (
        <h1>{props.course.name}</h1>
    )
}


const Total=(props)=>{
    const { parts } = props;
    const total = parts.reduce((sum, part) => sum + part.exercises, 0);

    return (
        <p>
            <strong>
                total of {total} exercises
            </strong>
        </p>
    )
}


const Course =(props)=>{
    const { course } = props;
    return (
        <p>{course.name} {course.exercises} </p>
    )   
}

export {
	Header,
	Total,
	Course,
}