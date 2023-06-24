import ComicsList from './components/ComicsList'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ComicsList/>} />
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
