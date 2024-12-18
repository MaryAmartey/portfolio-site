import * as THREE from 'three'
import '../styles/App.css'
import WebGL from 'three/addons/capabilities/WebGL.js'
import gsap from 'gsap'
import Navigation from './Navigation'
import bgAudio from '../assets/audio/bgAudio.mp3'

function HomePage() {
  function animate() {
    requestAnimationFrame(animate)
    sphereMesh.rotation.x += 0.00001 // Adjust the rotation speed as needed
    sphereMesh.rotation.y += 0.0005
    sphereMesh.rotation.z += 0.0004
    //ratote scene particles
    particleMesh.rotation.y += 0.0002
    particleMesh.rotation.x += 0.0002
    renderer.render(scene, camera)
  }
  const scene = new THREE.Scene()
  //size
  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
  }

  const renderer = new THREE.WebGLRenderer()
  renderer.setSize(sizes.width, sizes.height)
  renderer.setPixelRatio(2)
  document.body.appendChild(renderer.domElement)

  // Use a directional light for better illumination
  const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
  directionalLight.position.set(1, 1, 1)
  scene.add(directionalLight)

  const camera = new THREE.PerspectiveCamera(
    45,
    sizes.width / sizes.height,
    0.1,
    1000
  )
  camera.aspect = sizes.width / sizes.height
  if (camera.aspect > 1) {
    camera.position.z = 10
  } else {
    camera.position.z = 8 / camera.aspect
  }

  const listener = new THREE.AudioListener()
  camera.add(listener)

  // create a global audio source
  const sound = new THREE.Audio(listener)

  // load a sound and set it as the Audio object's buffer
  const audioLoader = new THREE.AudioLoader()
  audioLoader.load(bgAudio, function (buffer) {
    sound.setBuffer(buffer)
    sound.setLoop(true)
    sound.setVolume(0.5)
    sound.play()
  })

  const geometry = new THREE.SphereGeometry(3, 198, 90, 68)

  const material = new THREE.PointsMaterial({
    size: 0.03,
    color: 'blue', // Apply the texture as a map // #5e0202 //#03082b // #450535
    fog: true,
    transparent: true,
    sizeAttenuation: true,
  })

  const sphereMesh = new THREE.Points(geometry, material)

  const particlesGeometry = new THREE.BufferGeometry()
  const particlesCount = 15000

  const vertices = new Float32Array(particlesCount * 3)

  for (let i = 0; i < particlesCount * 3; i++) {
    vertices[i] = (Math.random() - 0.5) * (Math.random() * 6.5)
  }

  //this is actaully setting the randoness of each particle
  particlesGeometry.setAttribute(
    'position',
    new THREE.Float32BufferAttribute(vertices, 3)
  )

  const sceneMaterial = new THREE.PointsMaterial({
    size: 0.025,
    color: 'blue', // Apply the texture as a map // #fa1bc2
    transparent: true,
  })

  const particleMesh = new THREE.Points(particlesGeometry, sceneMaterial)
  scene.add(sphereMesh, particleMesh)

  if (WebGL.isWebGLAvailable()) {
    animate()
  } else {
    const warning = WebGL.getWebGLErrorMessage()
    document.getElementById('container').appendChild(warning)
  }

  window.addEventListener('resize', () => {
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight
    camera.aspect = sizes.width / sizes.height
    renderer.setSize(sizes.width, sizes.height)
    if (camera.aspect > 1) {
      camera.position.z = 10
    } else {
      camera.position.z = 8 / camera.aspect
    }
    camera.updateProjectionMatrix()
  })

  const loop = () => {
    renderer.render(scene, camera)
    window.requestAnimationFrame(loop)
  }
  loop()

  const t1 = gsap.timeline({ defaults: { duration: 1 } })
  // Animate the sphere's scale to make it pop into the screen
  t1.fromTo(
    sphereMesh.scale,
    { x: 0, y: 0, z: 0 },
    { x: 1, y: 1, z: 1, duration: 1, ease: 'back.out(1.7)' }
  )

  return (
    <>
      <Navigation color="bg-transparent" />
    </>
  )
}

export default HomePage
