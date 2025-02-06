import { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import publicRoutes from './routes/publicRoute'
import privateRoutes from './routes/privateRoute'
import PublicLayout from '@components/layouts/PublicLayout'
import AdminLayout from '@components/layouts/AdminLayout'

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<></>}>
        <Routes>
          <Route path="/" element={<PublicLayout />}>
            {publicRoutes?.map((item, i) => <Route {...item} key={i} />)}
          </Route>

          <Route path="/admin/*" element={<AdminLayout />}>
            {privateRoutes.map((item, i) => (
              <Route {...item} key={i} />
            ))}
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
