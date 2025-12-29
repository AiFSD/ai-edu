

import About from './layouts/About'
import CardsSec from './layouts/CardsSec'
import How from './layouts/How'
import MainLayout from './layouts/MainLayout'
import Nav from './layouts/Nav'

const App = () => {
  return (
    <div>
      <MainLayout />

      <About/>
      <Nav />
      <CardsSec />
      <How/>
    </div>
  )
}

export default App