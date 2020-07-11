import React, { Suspense } from 'react'
import { Canvas, Dom } from 'react-three-fiber'
import './App.scss'
import Controls from './components/Controls/Controls'
import Scene from './components/Scene/Scene'

function App() {
  return (
    <div className="app">
      <Canvas camera={{ zoom: 100, position: [0, 0, 300] }}>
        <Suspense
          fallback={<Dom center className="loading" children="Loading..." />}
        >
          <Controls />
          <Scene />
        </Suspense>
      </Canvas>
      <div className="app__wrapper">
        <div className="app__title">
          <span>Ocean</span>
          <span>React Three Fiber + Perlin 3D noise</span>
        </div>
      </div>
    </div>
  )
}

export default App
