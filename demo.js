import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { createBackground } from './index.js'

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
const scene = new THREE.Scene();
const background = createBackground({ grainScale: 0.0015 })
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({
  color: '#999',
  wireframe: true
})
const box = new THREE.Mesh(geometry, material)
const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 1, 10000);
const controls = new OrbitControls(camera, renderer.domElement);

scene.add(box)
scene.add(background)
camera.position.set(5, 5, 5);
controls.update();

function animate () {
  requestAnimationFrame(animate);
  // required if controls.enableDamping or controls.autoRotate are set to true
  controls.update();
  renderer.render(scene, camera);
}

animate()