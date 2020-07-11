import React, { useEffect } from 'react'
import Lights from './Lights/Lights'
import Terrain from './Terrain/Terrain'
import TextObject from './Terrain/TextObject'
import Sphere from './Sphere/Sphere'

const Scene = () => {
  return (
    <>
      <Lights />
      <Terrain />
      {/* <TextObject /> */}
      {/* <Sphere /> */}
    </>
  )
}

export default Scene
