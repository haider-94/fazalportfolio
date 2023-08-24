import React from 'react'

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className='z-10 grid px-3 md:px-8'>
      {children}
    </main>
  )
}