import React from 'react'
import Link from 'gatsby-link'
import Logo from './logo.svg'

const Header = () => (
  <div
    style={{
      background: "#004876",
      marginBottom: "1.45rem"
    }}
  >
    <div
      style={{
        margin: "0 auto",
        maxWidth: 960,
        padding: "1.45rem 1.0875rem"
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: "white",
            textDecoration: "none"
          }}
        >
          <img src={Logo} alt="kitconcept" style={{marginBottom: "0"}} />
        </Link>
      </h1>
    </div>
  </div>
);

export default Header
