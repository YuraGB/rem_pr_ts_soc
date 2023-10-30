import type { ReactElement } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import { Earth } from "~/components/homePageComponent/Earth";
import { SmileIcon } from "~/components/homePageComponent/SmileIcon";
import { WinkinngFaceIcon } from "~/components/homePageComponent/WinkinngFaceIcon";
import { HeartIcon } from "~/components/homePageComponent/HeartIcon";

export const HomePage = (): ReactElement => {
  return (
    <Suspense>
      <Canvas shadows camera={{ position: [0, 0, 15], fov: 45 }}>
        <Environment preset="city" />
        <OrbitControls
          target={[0, 0.35, 0]}
          maxPolarAngle={1.45}
          autoRotate={true}
        />

        <Earth rotation-x={1} />

        <SmileIcon position={[-1, 5, 0]} />
        <WinkinngFaceIcon position={[2, 5, 0]} />
        <HeartIcon position={[-2, -5, 0]} />

        <mesh>
          <meshNormalMaterial />
        </mesh>
      </Canvas>
    </Suspense>
  );
};
