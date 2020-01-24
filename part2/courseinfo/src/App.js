import React from 'react';
import { Header, Course, Total } from './components/Course';

const App = ({ course }) =>{
    
  const rows = (element)=> element.parts.map(parts =>
      <Course key={parts.id} course={parts} />)

  const block = () => course.map(course=>
      {return (
      <div key={course.id}>
          <Header course={course}/>
          {rows(course)}
          <Total parts = {course.parts} />
      </div>
      )
      }
      )
    
  return (
      <div>
          {block()}
      </div>
  )
}

export default App;
