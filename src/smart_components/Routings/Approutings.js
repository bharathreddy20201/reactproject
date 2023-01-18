import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Header'
import Content from './Content'
import About from './About'

function Approutings () {
    const location = window.location.pathname;
    console.log(location)
  return (
    <div>
   <Header />
   {location=== "/" && <Content />}
   {location=== "/about" &&  <About />}
    </div>
  )
}

export default Approutings