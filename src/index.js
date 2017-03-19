import ReactDOM from 'react-dom';
// import { Router } from 'react-router';
// import App from './App';
import Routes from './routes';
import './index.css';
import { foo } from './components/modalButton'

foo("test");
ReactDOM.render(
  Routes,
  document.getElementById('root')
);
