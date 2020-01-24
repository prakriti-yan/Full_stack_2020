import React, { useState } from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

const Display =(props) =>{
    return (
        <h1>{props.text}</h1>
    )
}
const Button = (props) =>{
    return (
        <button onClick = {props.handleClick}>
            {props.text}
        </button>
    )
}

const Statistics = (props) =>{
    return (
        <tr>
            <td>{props.text} </td>
            <td>{props.value}</td>
        </tr>
    )
}

const Positive =(props)=>{
    return (
        <tr>
            <td>{props.text} </td>
            <td>{props.value}{props.perc} </td>
        </tr>
    )
}

const App = () =>{
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);


    return (
        <div>
            <Display text='give feedback'/>
            <Button handleClick={()=>setGood(good+1)} text="good" />
            <Button handleClick={()=>setNeutral(neutral+1)} text="neutral" />
            <Button handleClick={()=>setBad(bad+1)} text="bad" />
            <Display text ='Statistics'/>
            <table>            
                <Statistics text ='good' value = {good} />
                <Statistics text ='neutral' value = {neutral} />
                <Statistics text ='bad' value = {bad} />
                <Statistics text ='all' value = {bad + neutral + good} />
                <Statistics text ='average' value = {(bad*(-1) + neutral*0 + good*1)/(bad+neutral+good)} />
                <Positive text ='positive' value = {good /(bad + neutral + good)*100} perc='%' />
            </table>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
