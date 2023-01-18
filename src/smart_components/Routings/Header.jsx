import React from 'react'

function Header() {
  return (
    
<nav className='navbar bg-dark text-primary justify-content-center' >
<li className='nav-link ' style={{marginRight:'50px'}}>
    <a href="/" className='nav-link'>Refresh</a>
</li>
<li className='nav-link' style={{marginRight:'50px'}}>
    <a href="/menu" className='nav-link'>Sidebar</a>
</li>
<li className='nav-link' style={{marginRight:'50px'}}>
    <a href="/dashboard" className='nav-link'>Dashboard</a>
</li>
<li className='nav-link'style={{marginRight:'50px'}}>
    <a href="/project" className='nav-link'>My projects</a>
</li>
<li className='nav-link' style={{marginRight:'50px'}}>
    <a href="/about" className='nav-link'>About</a>
</li>
</nav>

    
  )
}

export default Header