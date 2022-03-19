import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Layout from './components/layout/Layout'
import Landing from './pages/Landing'
import Environment from './pages/Environment'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Layout>
      <Landing />
    </Layout>
  )
}

export default App
