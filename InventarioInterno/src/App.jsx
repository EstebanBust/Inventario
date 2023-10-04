import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { Listar } from './pages/invListar'
import { Crear } from './pages/invCrear'
import { Nav } from './components/Nav'

function App() {
  return (
    <BrowserRouter>
      <Nav />

      <Routes>

        <Route path="/" element={<Navigate to="/inventario" />} />
        <Route path='/inventario' element={<Listar />} />
        <Route path='/inventario/crear' element={<Crear />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App