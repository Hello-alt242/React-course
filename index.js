//import react and react-dom libraries
import React from 'react';
import ReactDOM from 'react-dom';

//Create a react component
const App=function(){
    return <div>Hi there!</div>;
};


// Take the react component and show it on screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
