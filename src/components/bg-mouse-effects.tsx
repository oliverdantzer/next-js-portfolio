import { useEffect, useState, useRef, ReactNode } from "react";
import { v4 as uuidv4 } from "uuid";

type Particle = {
  x: number;
  y: number;
  id?: string;
  rotationX: number;
  rotationY: number;
  rotationZ: number;
};

export default function BackgroundMouseEffect(params: {
  children: ReactNode;
  minDistance: number;
  killTime: number;
  rotation?: boolean;
  offset?: number;
}) {
  const [particles, setParticles] = useState<Particle[]>([]);
  // last position non-interpolated particle was added. Initialized to -minDistance so that first particle is added as soon as mouse moves.
  const lastPos = useRef<{ x: number; y: number }>({
    x: -params.minDistance,
    y: -params.minDistance,
  });

  useEffect(() => {
    function addParticle(x: number, y: number) {
      const offset = params.offset ? params.offset : 0;
      const newParticle = {
        x: x + Math.random() * offset - offset / 2,
        y: y + Math.random() * offset - offset / 2,
        id: uuidv4(),
        rotationX: params.rotation ? Math.random() * 360 : 0,
        rotationY: params.rotation ? Math.random() * 360 : 0,
        rotationZ: params.rotation ? Math.random() * 360 : 0,
      };
      setParticles((particles) => [...particles, newParticle]);
      setTimeout(() => {
        setParticles((particles) =>
          particles.filter((particle) => particle.id !== newParticle.id)
        );
      }, params.killTime);
    }
    function handleMouseMove(e: MouseEvent) {
      const distance = Math.sqrt(
        Math.pow(e.clientX - lastPos.current.x, 2) +
          Math.pow(e.clientY - lastPos.current.y, 2)
      );
      if (distance >= params.minDistance) {
        addParticle(e.clientX, e.clientY); // particle at mouse position
        lastPos.current = { x: e.clientX, y: e.clientY };
      }
    }
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [params.minDistance, params.killTime, params.rotation, params.offset]);

  return (
    <div className="fixed inset-0">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute"
          style={{
            left: particle.x,
            top: particle.y,
            transform: `rotateX(${particle.rotationX}deg) rotateY(${particle.rotationY}deg) rotateZ(${particle.rotationZ}deg)`,
          }}
        >
          {params.children}
        </div>
      ))}
    </div>
  );
}
