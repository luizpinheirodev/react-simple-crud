import './App.css';
import Create from './components/create';
import Read from './components/read';
import Update from './components/update';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="main">
          <h2 className="main-header">React Crud Operations</h2>
      <Router>
        <Routes>
          <Route exact path='/create' element={<Create /> }>Create</Route>
          <Route exact path='/read' element={<Read />}>Read</Route>
          <Route path='/update' element={<Update />}>Update</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;