import React, { useState } from 'react'
import { useFrame, useUpdate } from 'react-three-fiber'

import { noise } from './perlin'
import { TextGeometry } from 'three'

const Terrain = () => {
  const [tempMultiplier, setTempMultiplier] = useState(0)
  const [noiseSeed, setNoiseSeed] = useState(Math.random())

  const mesh = useUpdate(({ geometry }) => {
    noise.seed(0.777)
    let pos = geometry.getAttribute('position')
    let pa = pos.array
    const hVerts = geometry.parameters.heightSegments + 1
    const wVerts = geometry.parameters.widthSegments + 1
    for (let j = 0; j < hVerts; j++) {
      for (let i = 0; i < wVerts; i++) {
        // const ex = 1.1
        const ex = 1
        pa[3 * (j * wVerts + i) + 2] =
          (noise.simplex3(i / 100, j / 100, 0) +
            noise.simplex3((i + 200) / 50, j / 50, tempMultiplier) *
              Math.pow(ex, 1) +
            noise.simplex3((i + 400) / 25, j / 25, tempMultiplier) *
              Math.pow(ex, 2) +
            noise.simplex3((i + 600) / 12.5, j / 12.5, tempMultiplier) *
              Math.pow(ex, 3) +
            +(
              noise.simplex3((i + 800) / 6.25, j / 6.25, tempMultiplier * 2) *
              Math.pow(ex, 4)
            )) /
          2
      }
    }

    pos.needsUpdate = true
  })

  // Raf loop
  useFrame(() => {
    //   mesh.current.
    // mesh.current.rotation.z += 0.0005
    // mesh.current.position.z += 0.01
    mesh.current.rotation.z += 0.001
    // setNoiseSeed(noiseSeed + tempMultiplier / 1000000)
    // setTempMultiplier(2 * tempMultiplier)
    // console.log(tempMultiplier)
    setTempMultiplier(tempMultiplier + 0.001)
  })

  return (
    <mesh ref={mesh} rotation={[-Math.PI / 2.4, 0, 0]}>
      <planeBufferGeometry attach="geometry" args={[50, 25, 75, 75]} />
      {/* <TextGeometry attach="geometry">123</TextGeometry> */}
      <meshPhongMaterial
        attach="material"
        color={'#ffffff'}
        specular={'#ffffff'}
        shininess={0}
        // flatShading
        // wireframe
      />
    </mesh>
  )
}

export default Terrain
