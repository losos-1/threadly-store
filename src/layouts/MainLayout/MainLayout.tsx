import { Outlet } from 'react-router-dom'

import Header from '../Header'
import Footer from '../Footer'

import './MainLayout.scss'

export default function MainLayout() {
  return (
    <div className="layout">

      <div className="layout__content">
        <Header />

        <main className="layout__main">
          <Outlet />
        </main>

        <Footer />
      </div>
    </div>
  )
}
