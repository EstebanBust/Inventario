import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { Listar } from './pages/invListar'
import { Crear } from './pages/invCrear'
import { Nav } from './components/Nav'
import { Login } from './pages/Login'
import { Toaster} from 'react-hot-toast'

function App() {
  return (
    <BrowserRouter>
      <Nav />

      <Routes>

        <Route path="/" element={<Navigate to="/inventario" />} />
        <Route path='/inventario' element={<Listar />} />
        <Route path='/inventario/crear' element={<Crear />} />
        <Route path='/inventario/:id' element={<Crear/>}/>
        <Route path='/login/' element={<Login/>}/>
      </Routes>
      <Toaster/>
    </BrowserRouter>
  )
}
export default App