import { createBrowserRouter } from 'react-router'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Experience from './pages/Experience'
import Skills from './pages/Skills'
import Certifications from './pages/Certifications'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: 'about', Component: About },
      { path: 'experience', Component: Experience },
      { path: 'skills', Component: Skills },
      { path: 'certifications', Component: Certifications },
      { path: 'contact', Component: Contact },
      { path: '*', Component: NotFound },
    ],
  },
])
