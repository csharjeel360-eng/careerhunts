"use client"

import dynamic from 'next/dynamic'
import React from 'react'

const NavigationDebug = dynamic(() => import('./NavigationDebug'), {
  ssr: false,
  loading: () => null,
})

export default function NavigationDebugClient() {
  return <NavigationDebug />
}
