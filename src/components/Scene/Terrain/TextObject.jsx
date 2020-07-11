import React, { useMemo } from 'react'
import { useLoader } from 'react-three-fiber'
import path from 'path'
import * as THREE from 'three'
const TextObject = () => {
  const font = useLoader(
    THREE.FontLoader,
    path.resolve(__dirname, '../../../fonts/helvetiker_regular.typeface.json'),
  )
  const config = useMemo(
    () => ({ font: font, hAlign: 'center', size: 1, height: 1 }),
    [font],
  )
  return (
    <mesh position={[2, 2, 2]}>
      <textGeometry attach="geometry" args={['Lorem Ipsum', config]} />
      <meshNormalMaterial attach="material" color="red" />
    </mesh>
  )
}
export default TextObject
