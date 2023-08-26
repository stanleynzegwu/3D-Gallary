import { Center, Environment, OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { useEffect } from "react";
import { gsap } from "gsap";
import { useThree } from "@react-three/fiber";
import { toggleFullScreen } from "../utils";
import { Gallary1 } from "./Gallary1";
import { Gallary2 } from "./Gallary2";
import { GallaryTopfloor } from "./GallaryTopFloor";

const Experience = () => {
  const { gl, camera } = useThree();

  toggleFullScreen(gl);
  useEffect(() => {
    const timeline = gsap.timeline();
    timeline
      .to(
        camera.position,
        {
          z: camera.position.z - 17.5,
          x: camera.position.x - 2,
          ease: "linear",
          duration: 3,
        },
        "-=1"
      )
      .to(camera.position, {
        // x: "+=2",
        y: "+=1",

        ease: "linear",
        duration: 3,
      });
  }, []);
  return (
    <>
      <Perf position="top-left" />
      <OrbitControls makeDefault />

      <directionalLight castShadow position={[1, 2, 3]} intensity={1.5} />
      {/* <Environment
        preset="city"
        ground={{
          height: 7,
          radius: 28,
          scale: 100,
        }}
      /> */}
      <ambientLight intensity={0.5} />
      <Center>
        <Gallary1 />
        <Gallary2 />
        <GallaryTopfloor />
      </Center>
    </>
  );
};

export default Experience;
