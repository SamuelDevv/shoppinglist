
import Header from './lister_componentb/Header'
import AddItem from './lister_componentb/AddItem'
import Content from './lister_componentb/Content'
import Footer from './ui_componentb/Footer'
import  { useState } from 'react'

// This will not use prop drilling to pass list of shopping list to the componwnts

const ListerB = () => {
    

  return (
    <div className='container'>
        <h1>Lister B: Context API</h1>
        <Header />
        <AddItem />
        <Content />
        <Footer />
    </div>
  )
}

export default ListerB