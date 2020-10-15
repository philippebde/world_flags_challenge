import Home from './pages/Home/Home'
import Country from './pages/Country/Country'
import NotFound from './pages/NotFound/NotFound'

export const routes = [
  {
    path:"*",
    component: NotFound,
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
      path: '/country/:code',
      name: 'Country',
      component: Country
  }
]