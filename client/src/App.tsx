import './App.css';
import NavBar from './components/Nav/NavBar';
import NewsList from './components/News/NewsList';
import { Routes, Route } from 'react-router-dom'
import ArchivesNews from './components/ArchivesNews/ArchivesNews';

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Routes>
          <Route path='/news' element={<NewsList />} />
          {/* <Route path='/archives' element={<ArchivesNews {...}/>} /> */}
        </Routes>
      </main>
    </>

  );
}

export default App;
