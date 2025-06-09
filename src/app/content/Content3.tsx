"use client"
import React, { useState } from 'react'
import Dashboard from '../components/Dashboard'
import SidebarComp from '../components/SidebarComp'

function Content3() {
  const [sidebarOpen, setSidebarOpen] = useState(true) // Start with sidebar open

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <SidebarComp isOpen={sidebarOpen} onToggle={toggleSidebar} />
      <Dashboard sidebarOpen={sidebarOpen} onToggleSidebar={toggleSidebar} />
    </div>
  )
}

export default Content3