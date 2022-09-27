import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StreamCreate from './pages/streams/StreamCreate';
import StreamEdit from './pages/streams/StreamEdit';
import StreamDelete from './pages/streams/StreamDelete';
import StreamShow from './pages/streams/StreamShow';
import Header from './components/Header'
import StreamList from './pages/streams/StreamList';

function App() {
  return (
    <div className="ui container">
      <BrowserRouter>
        <div>
          <Header />
          <Routes>
            <Route path='/' element={<StreamList />} exact />
            <Route path='/streams/new' element={<StreamCreate />} exact />
            <Route path='/streams/edit/:id' element={<StreamEdit />} exact />
            <Route path='/streams/delete/:id' element={<StreamDelete />} exact />
            <Route path='/streams/:id' element={<StreamShow />} exact />
          </Routes>
        </div>
      </BrowserRouter>
    </div >
  );
}

export default App;
