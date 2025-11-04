import React from 'react'
import TesaWeb from './components/TesaWeb'
import menu from './data/tesa'

const App = () => {
  return (
    <>
      <div className='p-5'>
        <h2>Menu List</h2>
        <div className='row'>
          {menu.map((m) => (
            <div className='col-md-4 mb-4' key={m.id}>
              <TesaWeb name={m.name} img={m.img} desc={m.desc} price={m.price} />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App