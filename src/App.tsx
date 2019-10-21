import React from 'react';
import './App.css';
import Form from './Components/Form'
import Info from "./Components/Info";
import Weather from "./Components/Weather";
const App: React.FC = () => {
  return (
    <div>
        <Form/>
        <Info/>
        <Weather/>
    </div>
  );
}

export default App;
