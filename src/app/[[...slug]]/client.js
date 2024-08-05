'use client'
 
import React from 'react'
import dynamic from 'next/dynamic'
 
const App = dynamic(() => import('../components/App.jsx'), { ssr: true }) ;

export function ClientOnly() {
  return <><App/></>
}