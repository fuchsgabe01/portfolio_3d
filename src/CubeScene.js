import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import styled from "styled-components";

// Styled component for the container
const ThreeJSContainer = styled.div`
  margin-top: 40%;
  width: 110%; // Use 100% to fill the width of its parent container, or specify a width
  height: 700px; // Specify the height you want for the 3D scene
  //margin: auto;
`;

const CubeScene = () => {
  const mountRef = useRef(null);
  const modelRef = useRef();
  const containerRef = useRef();

  useEffect(() => {
    const containerElement = containerRef.current;
    // Ensure the container is available
    if (containerElement) {
      // Scene setup
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        75,
        containerElement.clientWidth / containerElement.clientHeight,
        0.1,
        1000
      );
      const renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(
        containerElement.clientWidth,
        containerElement.clientHeight
      );
      renderer.setClearColor(0xedf1fd, 1);
      containerElement.appendChild(renderer.domElement);

      // Lighting
      const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
      directionalLight.position.set(0, 20, 0);
      scene.add(directionalLight);

      const ambientLight = new THREE.AmbientLight(0xffffff, 3);
      scene.add(ambientLight);

      // GLTF Loader for your model
      const loader = new GLTFLoader();
      loader.load("/idcard_v1.glb", (gltf) => {
        modelRef.current = gltf.scene;
        scene.add(gltf.scene);
      });

      camera.position.y = 7;
      camera.lookAt(0, 0, 0);

      const animate = () => {
        requestAnimationFrame(animate);

        if (modelRef.current) {
          // Ensure the model is loaded
          let time = Date.now() * 0.001;
          let small_x = Math.sin(time * 0.5) * 0.1;
          let small_z = Math.sin(time * 0.5 + Math.PI / 2) * 0.1;

          const delta = 0.1;
          const freq = 0.1;
          let big_z_help =
            (1 / Math.atan(1 / delta)) *
            Math.atan(Math.sin(2 * Math.PI * time * freq) / delta);

          let big_z = (Math.PI * (1 + big_z_help)) / 2;
          let big_y = (Math.PI * (1 + big_z_help)) / 4;

          modelRef.current.rotation.x = small_x;
          modelRef.current.rotation.z = small_z + big_z;
          modelRef.current.rotation.y = big_y;
        }

        renderer.render(scene, camera);
      };

      animate();

      // Clean up
      return () => {
        containerElement.removeChild(renderer.domElement);
        // Any other necessary cleanup actions
      };
    }
  }, []);

  // Use the styled container here
  return <ThreeJSContainer ref={containerRef} />;
};

export default CubeScene;
