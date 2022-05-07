import React from 'react'
import { Sidebar } from '../sideBar'
import { Aside } from '../aside'

export default function Container({ children }) {
  return (
    <div className="App flex max-w-7xl min-h-screen mx-auto	sh">
      <Sidebar />
      {children}
      <Aside />
    </div>
  )
}

