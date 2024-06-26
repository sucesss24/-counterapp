import React from 'react';
import ReactDOM from 'react-dom';
import Todos from './Todos';
import './index.css';

const App = () => {
  return (
    <div>
      <Todos />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
