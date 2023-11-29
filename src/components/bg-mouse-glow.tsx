import { useEffect, useState, useRef, useCallback } from "react";
import { v4 as uuidv4 } from "uuid";

type Particle = {
  x: number;
  y: number;
  id?: string;
};

export default function BackgroundMouseGlow(params: { killTime: number }) {
  const [particles, setParticles] = useState<Particle[]>([]);
  const isMouseOver = useRef<boolean>(false);
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({
    x: -100,
    y: -100,
  });
  const addParticle = useCallback(
    (x: number, y: number) => {
      const newParticle = {
        x: x,
        y: y,
        id: uuidv4(),
      };
      setParticles((particles) => [...particles, newParticle]);
      setTimeout(() => {
        if (particles.length > 1) {
          setParticles((particles) =>
            particles.filter((particle) => particle.id !== newParticle.id)
          );
        }
      }, params.killTime);
    },
    [params.killTime, particles.length]
  );
  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      setMousePos({ x: e.clientX, y: e.clientY });
      addParticle(e.clientX, e.clientY);
    }
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [addParticle]);

  return (
    <div className="fixed inset-0">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-[1px] h-[1px] bg-black dark:bg-fuchsia-800 rounded-full glow-trail"
          style={{
            left: particle.x,
            top: particle.y,
          }}
        />
      ))}
      <div
        className="absolute"
        style={{
          left: mousePos.x,
          top: mousePos.y,
        }}
      >
        <div className="w-[1px] h-[1px] bg-black dark:bg-fuchsia-800 rounded-full glow-trail" />
      </div>
    </div>
  );
}
