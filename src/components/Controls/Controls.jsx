import React, { useRef } from 'react'
import { extend, useFrame, useThree } from 'react-three-fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

extend({ OrbitControls })

const Controls = (props) => {
  const ref = useRef()
  const {
    camera,
    gl: { domElement },
  } = useThree()
  useFrame(() => ref.current && ref.current.update())
  return (
    <orbitControls
      ref={ref}
      args={[camera, domElement]}
      {...props}
      enableKeys={false}
      enableZoom={false}
      enablePan={false}
      // zoomSpeed={0.3}
      enableDamping
      maxAzimuthAngle={Math.PI / 12}
      minAzimuthAngle={-Math.PI / 12}
      maxPolarAngle={Math.PI / 2}
      minPolarAngle={Math.PI / 2}
    />
  )
}

export default Controls
