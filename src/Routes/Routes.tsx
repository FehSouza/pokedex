import { Route, Routes } from 'react-router-dom'
import { Home } from '../pages'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
    </Routes>
  )
}