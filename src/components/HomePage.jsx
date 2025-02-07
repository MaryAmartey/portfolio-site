import * as THREE from 'three'
import '../styles/App.css'
import WebGL from 'three/addons/capabilities/WebGL.js'
import gsap from 'gsap'
import Navigation from './Navigation'
import bgAudio from '../assets/audio/bgAudio.mp3'
import { useEffect, useRef } from 'react'

function HomePage() {
  const sceneRef = useRef(null)
  const rendererRef = useRef(null)
  const sphereMeshRef = useRef(null)
  const particleMeshRef = useRef(null)
  const soundRef = useRef(null)
  const animationFrameRef = useRef(null)

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene()
    sceneRef.current = scene

    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    }

    const renderer = new THREE.WebGLRenderer()
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(2)
    document.body.appendChild(renderer.domElement)
    rendererRef.current = renderer

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

    // Audio setup
    const listener = new THREE.AudioListener()
    camera.add(listener)

    const sound = new THREE.Audio(listener)
    soundRef.current = sound

    const audioLoader = new THREE.AudioLoader()
    audioLoader.load(bgAudio, function (buffer) {
      sound.setBuffer(buffer)
      sound.setLoop(true)
      sound.setVolume(0.5)
      // Don't autoplay - let user trigger it if needed
    })

    const geometry = new THREE.SphereGeometry(3, 198, 90, 68)
    const material = new THREE.PointsMaterial({
      size: 0.03,
      color: 'blue',
      fog: true,
      transparent: true,
      sizeAttenuation: true,
    })

    const sphereMesh = new THREE.Points(geometry, material)
    sphereMeshRef.current = sphereMesh

    const particlesGeometry = new THREE.BufferGeometry()
    const particlesCount = 15000
    const vertices = new Float32Array(particlesCount * 3)

    for (let i = 0; i < particlesCount * 3; i++) {
      vertices[i] = (Math.random() - 0.5) * (Math.random() * 6.5)
    }

    particlesGeometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(vertices, 3)
    )

    const sceneMaterial = new THREE.PointsMaterial({
      size: 0.025,
      color: 'blue',
      transparent: true,
    })

    const particleMesh = new THREE.Points(particlesGeometry, sceneMaterial)
    particleMeshRef.current = particleMesh
    scene.add(sphereMesh, particleMesh)

    // Animation function
    function animate() {
      if (
        !sphereMeshRef.current ||
        !particleMeshRef.current ||
        !rendererRef.current
      )
        return

      sphereMeshRef.current.rotation.x += 0.00001
      sphereMeshRef.current.rotation.y += 0.0005
      sphereMeshRef.current.rotation.z += 0.0004

      particleMeshRef.current.rotation.y += 0.0002
      particleMeshRef.current.rotation.x += 0.0002

      rendererRef.current.render(scene, camera)
      animationFrameRef.current = requestAnimationFrame(animate)
    }

    if (WebGL.isWebGLAvailable()) {
      animate()
    } else {
      const warning = WebGL.getWebGLErrorMessage()
      document.getElementById('container')?.appendChild(warning)
    }

    // Handle window resize
    const handleResize = () => {
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
    }

    window.addEventListener('resize', handleResize)

    // GSAP animation
    const t1 = gsap.timeline({ defaults: { duration: 1 } })
    t1.fromTo(
      sphereMesh.scale,
      { x: 0, y: 0, z: 0 },
      { x: 1, y: 1, z: 1, duration: 1, ease: 'back.out(1.7)' }
    )

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
      if (rendererRef.current) {
        rendererRef.current.dispose()
        document.body.removeChild(rendererRef.current.domElement)
      }
      if (soundRef.current) {
        soundRef.current.stop()
      }
      if (geometry) geometry.dispose()
      if (material) material.dispose()
      if (particlesGeometry) particlesGeometry.dispose()
      if (sceneMaterial) sceneMaterial.dispose()
    }
  }, [])

  return (
    <>
      <Navigation color="bg-transparent" />
      <main id="main" tabIndex="-1">
        {/* Main content */}
      </main>
    </>
  )
}

export default HomePage
