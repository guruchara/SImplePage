import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './components/Main';
import TableView from './components/showTable/TableView';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Main />} />
        <Route exact path='/viewDetails' element={<TableView />} />
      </Routes>
    </div>
  );
}

export default App;