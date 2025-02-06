import HomePage from '@pages/frontend/home'
import NotFoundPage from '@pages/404'
const routes = [
  {
    Component: HomePage,
    exact: true,
    index: true,
  },
  {
    Component: NotFoundPage,
    path: '*',
  },
]

export default routes
