import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { frames } from "../constants";

export function Gallary1(props) {
  const { nodes } = useGLTF("/models/gallaryModel1.glb");

  const texture = useTexture("textures/gallaryTexture1.jpg");

  const yellowLedMaterial = new THREE.MeshBasicMaterial({
    color: "#FFFF33",
  });

  texture.flipY = false;
  texture.colorSpace = THREE.SRGBColorSpace;

  const textureMaterial = new THREE.MeshBasicMaterial({
    map: texture,
  });

  return (
    <group
      {...props}
      dispose={null}
      onClick={(event) => event.stopPropagation()}
      onPointerEnter={(event) => event.stopPropagation()}
    >
      {frames(nodes, textureMaterial).map(({ name, geometry, position, rotation }) => (
        <mesh
          key={geometry + name}
          name={name}
          geometry={geometry}
          material={textureMaterial}
          position={position}
          rotation={rotation}
          onClick={(event) => {
            event.stopPropagation();
            console.log(event);
          }}
          onPointerEnter={(event) => {
            document.body.style.cursor = "pointer";
          }}
          onPointerLeave={(event) => {
            event.stopPropagation();
            document.body.style.cursor = "default";
          }}
        />
      ))}
      <mesh
        name="receptionDesk"
        geometry={nodes.receptionDesk.geometry}
        material={textureMaterial}
        position={[7.324, 1.157, 4.464]}
      />
      <mesh
        name="receptionDivider"
        geometry={nodes.receptionDivider.geometry}
        material={textureMaterial}
        position={[10.261, 2.667, 4.47]}
      />
      <mesh
        name="jointStaircase"
        geometry={nodes.jointStaircase.geometry}
        material={textureMaterial}
        position={[19.446, 1.037, 0.718]}
      />
      <mesh
        name="jointReceptionLedLight"
        geometry={nodes.jointReceptionLedLight.geometry}
        material={yellowLedMaterial}
        position={[6.841, 1.347, 4.464]}
      />
      <mesh
        name="handlePillarAndChair"
        geometry={nodes.handlePillarAndChair.geometry}
        material={textureMaterial}
        position={[-27.046, 2.08, -13.774]}
        rotation={[0, -1.571, 0]}
      />
    </group>
  );
}

useGLTF.preload("/models/gallaryModel1.glb");
