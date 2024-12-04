import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const ThreeCursor: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    if (containerRef.current) {
      containerRef.current.appendChild(renderer.domElement);
    }

    // Add Particle Effect
    const particles = new THREE.BufferGeometry();
    const particleCount = 500;
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 10; // Random positions
    }

    particles.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const particleMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.1,
    });
    const particleSystem = new THREE.Points(particles, particleMaterial);
    scene.add(particleSystem);

    // Cursor Tracking
    const cursor = new THREE.Vector2();

    const onMouseMove = (event: MouseEvent) => {
      cursor.x = (event.clientX / window.innerWidth) * 2 - 1;
      cursor.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", onMouseMove);

    // Animation Loop
    const animate = () => {
      particleSystem.rotation.y += 0.002;
      particleSystem.rotation.x += 0.002;

      // Update particle positions based on cursor
      const positions = particles.attributes.position.array;
      for (let i = 0; i < particleCount; i++) {
        positions[i * 3] += (cursor.x - positions[i * 3]) * 0.02; // Smooth follow
        positions[i * 3 + 1] += (cursor.y - positions[i * 3 + 1]) * 0.02;
      }
      particles.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    camera.position.z = 5;
    animate();

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
    />
  );
};

export default ThreeCursor;
