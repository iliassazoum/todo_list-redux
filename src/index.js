import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import UserForm from './UserForm';
import UserForms from './Api';

ReactDOM.render(
  <React.StrictMode>
    <UserForms />
  </React.StrictMode>,
  document.getElementById('root')
);


