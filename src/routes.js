import Home from './pages/Home/Home'
import Country from './pages/Country/Country'

export const routes = [
  {
    path:"*"
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
      path: '/country/:name',
      name: 'Country',
      component: Country
  }
]