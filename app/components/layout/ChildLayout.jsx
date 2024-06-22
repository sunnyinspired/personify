'use client'
import { ScoreContextProvider } from '@/utils/context/scoreContext'
import React from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'

function ChildLayout( {children }) {
  return (
    <ScoreContextProvider>
        <Header />
        { children }
        <Footer />
    </ScoreContextProvider>
  )
}

export default ChildLayout