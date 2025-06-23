
import './assets/styles/main.scss'
import Home from './pages/Home';
import Layout from './Layout';
import Blog from './pages/Blog';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/blog" element={<Blog />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
