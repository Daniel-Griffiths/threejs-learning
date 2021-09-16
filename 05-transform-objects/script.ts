import "style.css";
import * as THREE from "three";

/**
 * Canvas
 */
const canvas = document.querySelector("#webgl");

/**
 * Settings
 */
const sizes = {
  width: 800,
  height: 600,
};

/**
 * Scene
 */
const scene = new THREE.Scene();

/**
 * Objects
 */
const group = new THREE.Group();
group.position.setY(0);
group.scale.setY(2);
group.rotation.y = 1;
scene.add(group);

const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0xff0000 })
);
cube1.position.setX(-2);
group.add(cube1);

const cube2 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x00ff00 })
);
cube2.position.setX(0);
group.add(cube2);

const cube3 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x0000ff })
);
cube3.position.setX(2);
group.add(cube3);

/**
 * AxesHelper
 */
const axesHelper = new THREE.AxesHelper();
scene.add(axesHelper);

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.setZ(3);
scene.add(camera);

// camera.lookAt(mesh.position);

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
