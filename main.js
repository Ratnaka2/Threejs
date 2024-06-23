import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// Select the canvas element
const canvas = document.querySelector('.webgl');

// Create the scene
const scene = new THREE.Scene();

// Create a geometry and a material, then combine them into a mesh
const geometry = new THREE.SphereGeometry(6, 64, 64);
const material = new THREE.MeshStandardMaterial({ color: '#33abf9' });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Add a light to the scene
const light = new THREE.PointLight(0xffffff, 1, 100);
light.position.set(18, 10, 10);
scene.add(light);

// Create a camera and position it
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.z = 20;
scene.add(camera);

// Create OrbitControls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true
controls.enablePan = true
controls.enableZoom = false
controls.autoRotate = true
controls.autoRotateSpeed = 5

// Create a WebGL renderer
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// Handle window resize
window.addEventListener('resize', () => {
  // Update sizes
  const width = window.innerWidth;
  const height = window.innerHeight;
  
  // Update camera
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  
  // Update renderer
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

// Create an animation loop to continuously render the scene
function animate() {
  requestAnimationFrame(animate);
  
  // Update controls
  controls.update();
  
  // Render the scene
  renderer.render(scene, camera);
}

// Start the animation loop
animate();

