import React from 'react'
import Hero from '../components/Hero'
import FeatureDestination from '../components/FeatureDestination'
import ExclusiveOfferes from '../components/ExclusiveOfferes'
import Testimonial from '../components/Testimonial'
import NewsLetter from '../components/NewsLetter'


const Home = () => {
  return (
    <>
     <Hero />
     <FeatureDestination/> 
     <ExclusiveOfferes/>
     <Testimonial/>
     <NewsLetter/>
    </>
  )
}

export default Home