import React, { useState } from 'react'
import { useFrame, useUpdate } from 'react-three-fiber'
import { noise } from '../Terrain/perlin'

function Sphere() {
  const [tempMultiplier, setTempMultiplier] = useState(0)

  const mesh = useUpdate(({ geometry }) => {
    noise.seed(0.777)
    console.log(geometry);
    
    // let pos = geometry.getAttribute('widthSegments')
    // let pa = pos.array
    // const hVerts = geometry.parameters.heightSegments + 1
    // const wVerts = geometry.parameters.widthSegments + 1
    // for (let j = 0; j < hVerts; j++) {
    //   for (let i = 0; i < wVerts; i++) {
    //     // const ex = 1.1
    //     const ex = 1
    //     pa[3 * (j * wVerts + i) + 2] =
    //       (noise.simplex3(i / 100, j / 100, 0) +
    //         noise.simplex3((i + 200) / 50, j / 50, tempMultiplier) *
    //           Math.pow(ex, 1) +
    //         noise.simplex3((i + 400) / 25, j / 25, tempMultiplier) *
    //           Math.pow(ex, 2) +
    //         noise.simplex3((i + 600) / 12.5, j / 12.5, tempMultiplier) *
    //           Math.pow(ex, 3) +
    //         +(
    //           noise.simplex3((i + 800) / 6.25, j / 6.25, tempMultiplier) *
    //           Math.pow(ex, 4)
    //         )) /
    //       2
    //   }
    // }

    // pos.needsUpdate = true
  })

  // Raf loop
  useFrame(() => {
    //   mesh.current.
    // mesh.current.rotation.z += 0.0005
    // mesh.current.position.z += 0.01
    mesh.current.rotation.z += 0.005
    // setNoiseSeed(noiseSeed + tempMultiplier / 1000000)
    // setTempMultiplier(2 * tempMultiplier)
    // console.log(tempMultiplier)
    setTempMultiplier(Math.random())
  })

  return (
    <mesh
      ref={mesh}
      visible
      userData={{ test: 'hello' }}
      position={[0, 0, 0]}
      rotation={[0, 1, 3]}
      castShadow
    >
      <sphereGeometry attach="geometry" args={[2, 12, 12]} />
      <meshStandardMaterial
        attach="material"
        color="#e4e4e4"
        transparent
        roughness={1}
        metalness={0}
        wireframe
      />
    </mesh>
  )
}

export default Sphere
