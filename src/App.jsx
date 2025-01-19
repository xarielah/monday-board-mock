import { useState } from 'react'
import './App.css'
import Header from './components/header'
import SideNav from './components/sidenav'
import TableList from './components/table/table-list'

function App() {
  const [count, setCount] = useState(0)

  return (
    <section className='app'>
      <Header />
      <SideNav />
      <main className='main-content'>
        <TableList />
      </main>
    </section>
  )
}

export default App
