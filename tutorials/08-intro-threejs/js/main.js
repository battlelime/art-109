let scene, camera, renderer, cube;
let sceneContainer = document.querySelector("#scene-container");

// Basic Three.JS scene from documentation, importing Three.JS through a CDN 
// https://threejs.org/docs/#manual/en/introduction/Creating-a-scene

//~~~~~~~Import Three.js (also linked to as import map in HTML)~~~~~~
import * as THREE from 'three';

// Import add-ons
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

function inti() {
    // ~~~~~~~~~~~~~~~~Set up~~~~~~~~~~~~~~~~
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    const light = new THREE.DirectionalLight(0xffffff, 3);
    light.position.set(1, 1, 5);
    scene.add(light);

    const helper = new THREE.DirectionalLightHelper(light, 5);
    scene.add(helper);

    const lightR = new THREE.DirectionalLight(0xffffff, 3);
    lightR.position.set(-1, -1, -5);
    scene.add(lightR);

    const helperR = new THREE.DirectionalLightHelper(lightR, 5);
    scene.add(helperR)

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    const container = document.getElementById('three-container');
    container.appendChild(renderer.domElement);



    // ~~~~~~~~~~~~~~~~ Initiate add-ons ~~~~~~~~~~~~~~~~
    //const controls = new OrbitControls(camera, renderer.domElement);
    const loader = new GLTFLoader(); // to load 3d models

    loader.load('assets/dog_shiny.gltf', function (gltf) {
        const dog = gltf.scene;
        dog.position.set(0, -1, 0);
        scene.add(dog);
        dog.scale.set(3, 3, 3);
    });


    // ~~~~~~~~~~~~~~~~ Create scene here ~~~~~~~~~~~~~~~~
    // →→→→→→ Follow next steps in tutorial: 
    // https://threejs.org/docs/#manual/en/introduction/Creating-a-scene
    const geometry = new THREE.BoxGeometry(2, 2, 2);
    //const material = new THREE.MeshStandardMaterial({ color: 0x00ff80 });
    const texture = new THREE.TextureLoader().load('textures/Ice002_1K-JPG_Color.jpg');
    const material = new THREE.MeshStandardMaterial({ map: texture });

    cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    const geometryS = new THREE.SphereGeometry(2, 10, 1);
    const materialS = new THREE.MeshStandardMaterial({ map: texture });
    const sphere = new THREE.Mesh(geometryS, materialS); scene.add(sphere)
    scene.add(sphere)

}

function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowResize, false);

inti();
animate(); 
