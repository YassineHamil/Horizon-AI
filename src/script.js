import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// === Sélecteurs ===
const canvas = document.querySelector('canvas.webgl');
const discoverLink = document.getElementById('discover');

// === Variables ===
let currentScene = 'particles'; // 'particles' ou 'graph'
let scene, camera, renderer, controls;
let sphere, particlesMesh;

// === Initialisation de la scène Particules ===
function initParticlesScene() {
    scene = new THREE.Scene();

    // Objet principal
    const geometry = new THREE.TorusGeometry(.7, .2, 16, 100);
    const material = new THREE.PointsMaterial({ size: 0.0005 });
    sphere = new THREE.Points(geometry, material);

    // Particules
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCnt = 5000;
    const posArray = new Float32Array(particlesCnt * 3);
    for (let i = 0; i < particlesCnt * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * (Math.random() * 5);
    }
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMaterial = new THREE.PointsMaterial({ size: 0.0005 });
    particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);

    scene.add(sphere, particlesMesh);

    // Lumière
    const pointLight = new THREE.PointLight(0xffffff, 0.1);
    pointLight.position.set(2, 3, 4);
    scene.add(pointLight);

    // Camera
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.set(0, 0, 2);
    scene.add(camera);

    // Renderer
    renderer = new THREE.WebGLRenderer({ canvas: canvas });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(new THREE.Color('#21282a'), 1);

    // Mouse animation
    document.addEventListener('mousemove', animateParticles);

    function animateParticles(event) {
        mouseX = event.clientX;
        mouseY = event.clientY;
    }

    // Variables souris
    var mouseX = 0, mouseY = 0;

    // Animation
    const clock = new THREE.Clock();

    function tick() {
    if (currentScene !== 'particles') return; // Stop si on change de scène

    const elapsedTime = clock.getElapsedTime();
    sphere.rotation.y = 0.5 * elapsedTime;
    particlesMesh.rotation.y = -0.1 * elapsedTime;

    if (mouseX > 0) {
        particlesMesh.rotation.x = -mouseY * (elapsedTime * 0.00008);
        particlesMesh.rotation.y = mouseX * (elapsedTime * 0.00008);
    }

    renderer.render(scene, camera);
    requestAnimationFrame(tick);
}

    tick();
}

// === Initialisation de la scène Graphique 3D ===
function initGraphScene() {
    currentScene = 'graph';
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x111111);

    camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(20, 25, 40);

    renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Lumières
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(10, 20, 10);
    scene.add(light);
    scene.add(new THREE.AmbientLight(0x404040));

    // Contrôles
    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.1;

    // Données
    const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    const values = [100,200,400,400,300,200,200,400,400,300,200,100];

    values.forEach((value, i) => {
        const geometry = new THREE.BoxGeometry(0.8, value / 50, 0.8);
        const material = new THREE.MeshStandardMaterial({ color: 0x0000ff });
        const bar = new THREE.Mesh(geometry, material);
        bar.position.x = i * 2.5 - (months.length * 2.5)/2;
        bar.position.y = value / 100;
        scene.add(bar);
    });

    scene.add(new THREE.AxesHelper(20));

    // Animation
    function animate() {
        requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
    }
    animate();
}

// === Gestion du bouton Découvrir ===
// discoverLink.addEventListener('click', (e) => {
//     e.preventDefault();
//     initGraphScene();
// });
discoverLink.addEventListener('click', (e) => {
    e.preventDefault();
    
    // Masquer le texte
    const container = document.querySelector('.container');
    container.style.display = 'none';
    
    // Lancer le graphique
    initGraphScene();
});

// === Responsive ===
window.addEventListener('resize', () => {
    if (camera && renderer) {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }
});

// === Lancer la scène particules au départ ===
initParticlesScene();
