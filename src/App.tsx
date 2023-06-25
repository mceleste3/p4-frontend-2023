import ComicPage from './components/ComicPage';
import ComicsList from './components/ComicsList'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  //const comic:Comic = {};
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ComicsList/>}/>
        <Route path="/:id" element={<ComicPage/>}/>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
