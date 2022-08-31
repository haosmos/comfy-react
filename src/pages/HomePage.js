import React from 'react'
import { Hero, Services, Contacts, FeaturedProducts } from '../components'

const HomePage = () => {
  return (
      <main>
        <Hero/>
        <FeaturedProducts/>
        <Services/>
        <Contacts/>
      </main>
  )
}

export default HomePage;
