import React from 'react'
import Link from 'gatsby-link'
import logo from '../img/logo.svg'

const IndexPage = () => (
  <div className="content">
    <img src={logo} className="logo" />
    <h1 className="title">Handmade Custom Furniture</h1>
    <p>
      Nick Gordon<br />
      <span className="descr">Designer &amp; Maker</span>
    </p>
    <p>
      P. <a href="tel:0212270060">021 227 0060</a>
    </p>
    <p>
      E. <a href="mailto:nick@rawelements.co.nz">nick@rawelements.co.nz</a>
    </p>
  </div>
)

export default IndexPage
