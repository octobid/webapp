import React from 'react'
import Link from 'next/link'
import HomepageLayout from '../components/HomepageLayout'

const AboutPage: React.FC = () => (
  <HomepageLayout page="About">
    <h1>About</h1>
    <p>This is the about page</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </HomepageLayout>
)

export default AboutPage
