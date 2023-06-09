import MainContainer from '@/components/container/main-container'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`${inter.className}`}
    >
      <MainContainer />
    </main>
  )
}
