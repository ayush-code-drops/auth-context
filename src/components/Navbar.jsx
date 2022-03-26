import React from 'react'
import { useContext } from 'react'
import styled from 'styled-components'
import { AuthContext } from '../contexts/AuthContext'
const NavWrapper = styled.nav`
background:black;
color:white;
display:flex;
align-items:center;
justify-content:space-between;
padding:17px;
`
function Navbar() {
    const {auth,toggleAuth}=useContext(AuthContext)
  return (
      <NavWrapper>
          <div>
              Auth Context
          </div> 
          <button onClick={toggleAuth}>
{auth===true?"LOG OUT":"LOG IN"}
          </button>
    </NavWrapper>
  )
}

export default Navbar