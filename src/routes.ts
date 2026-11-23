import { createBrowserRouter, Navigate } from 'react-router'
import { createElement } from 'react'
import Layout from './components/Layout'
import Portfolio from './pages/Portfolio'
import NotFound from './pages/NotFound'

const formerPages = ['about', 'experience', 'skills', 'certifications', 'contact']

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: Portfolio },
      ...formerPages.map((path) => ({
        path,
        element: createElement(Navigate, { to: `/#${path}`, replace: true }),
      })),
      { path: '*', Component: NotFound },
    ],
  },
])
