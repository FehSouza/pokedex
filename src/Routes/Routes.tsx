import { Route, Routes } from 'react-router-dom'
import { Container } from '../components'
import { About, Evolution, Home, Stats } from '../pages'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />

        <Route path="/" element={<Container />}>
          <Route path="/about">
            <Route index element={<About />} />
            <Route path=":id" element={<About />} />
          </Route>

          <Route path="/stats">
            <Route index element={<Stats />} />
            <Route path=":id" element={<Stats />} />
          </Route>

          <Route path="/evolution">
            <Route index element={<Evolution />} />
            <Route path=":id" element={<Evolution />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  )
}
