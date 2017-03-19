import ReactDOM from 'react-dom';
// import { Router } from 'react-router';
// import App from './App';
import Routes from './routes';
import './index.css';
import { runKimchi } from './components/modalButton'


runKimchi("Subscribe", "test","hello","world");

ReactDOM.render(
  Routes,
  document.getElementById('root')
);
