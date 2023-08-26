import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";

export function GallaryTopfloor(props) {
  const { nodes } = useGLTF("/models/gallaryTopFloor.glb");

  const texture = useTexture("textures/gallaryTopFloor.jpg");

  const floorMaterial = new THREE.MeshStandardMaterial({
    map: texture,
    roughness: 0.04,
  });

  texture.flipY = false;
  texture.colorSpace = THREE.SRGBColorSpace;

  const textureMaterial = new THREE.MeshBasicMaterial({
    map: texture,
  });

  return (
    <group {...props} dispose={null}>
      <mesh
        name="frame35"
        geometry={nodes.frame35.geometry}
        material={textureMaterial}
        position={[-12.008, 7.388, 9.252]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        name="frame36"
        geometry={nodes.frame36.geometry}
        material={textureMaterial}
        position={[-13.168, 7.388, 9.252]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        name="frame37"
        geometry={nodes.frame37.geometry}
        material={textureMaterial}
        position={[-27.549, 7.388, 9.252]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        name="frame38"
        geometry={nodes.frame38.geometry}
        material={textureMaterial}
        position={[-28.693, 7.388, 9.151]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        name="frame39"
        geometry={nodes.frame39.geometry}
        material={textureMaterial}
        position={[-27.549, 7.385, -4.233]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        name="frame40"
        geometry={nodes.frame40.geometry}
        material={textureMaterial}
        position={[-28.712, 7.385, -4.233]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        name="frame41"
        geometry={nodes.frame41.geometry}
        material={textureMaterial}
        position={[-12.008, 7.388, -4.248]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        name="frame42"
        geometry={nodes.frame42.geometry}
        material={textureMaterial}
        position={[-13.168, 7.388, -4.248]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        name="frame43"
        geometry={nodes.frame43.geometry}
        material={textureMaterial}
        position={[-7.819, 7.516, 20.455]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        name="frame44"
        geometry={nodes.frame44.geometry}
        material={textureMaterial}
        position={[23.334, 7.516, -27.651]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        name="frame45"
        geometry={nodes.frame45.geometry}
        material={textureMaterial}
        position={[-7.819, 7.516, -27.651]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        name="mergedUpper"
        geometry={nodes.mergedUpper.geometry}
        material={textureMaterial}
        position={[11.864, 6.089, -19.869]}
        rotation={[0, 1.571, 0]}
      />

      <mesh
        name="floorTile2"
        geometry={nodes.floorTile2.geometry}
        material={floorMaterial}
        position={[-8.818, 5.828, -3]}
      />
    </group>
  );
}

useGLTF.preload("/models/gallaryTopFloor.glb");
