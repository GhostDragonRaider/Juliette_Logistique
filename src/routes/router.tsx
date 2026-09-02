import { lazy, Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'

import { RootLayout } from '@/components/layout/RootLayout'
import { paths } from '@/routes/paths'

const HomePage = lazy(() => import('@/pages/HomePage'))
const ServicesPage = lazy(() => import('@/pages/ServicesPage'))
const AboutPage = lazy(() => import('@/pages/AboutPage'))
const PartnersPage = lazy(() => import('@/pages/PartnersPage'))
const ContactPage = lazy(() => import('@/pages/ContactPage'))
const CareersPage = lazy(() => import('@/pages/CareersPage'))
const ApplyPage = lazy(() => import('@/pages/ApplyPage'))
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'))

function PageFallback() {
  return <div className="min-h-[60vh]" aria-busy="true" />
}

function withSuspense(element: React.ReactNode) {
  return <Suspense fallback={<PageFallback />}>{element}</Suspense>
}

export const router = createBrowserRouter([
  {
    path: paths.home,
    element: <RootLayout />,
    children: [
      { index: true, element: withSuspense(<HomePage />) },
      { path: paths.services, element: withSuspense(<ServicesPage />) },
      { path: paths.about, element: withSuspense(<AboutPage />) },
      { path: paths.partners, element: withSuspense(<PartnersPage />) },
      { path: paths.contact, element: withSuspense(<ContactPage />) },
      { path: paths.careers, element: withSuspense(<CareersPage />) },
      { path: paths.apply, element: withSuspense(<ApplyPage />) },
      { path: '*', element: withSuspense(<NotFoundPage />) },
    ],
  },
])
