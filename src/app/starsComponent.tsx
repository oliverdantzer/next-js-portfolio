"use client";
import { useRef, useEffect } from "react";

const debounce = <F extends (...args: any[]) => void>(
  func: F,
  delay: number
) => {
  let timeoutId: NodeJS.Timeout | null;

  return (...args: Parameters<F>) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      func(...args);
      timeoutId = null;
    }, delay);
  };
};

// set fill or stroke to null for nothing
function drawCircle(
  ctx: CanvasRenderingContext2D,
  pos: [number, number],
  radius: number,
  fill: string = "white",
  stroke: string = "white",
  strokeWidth: number = 1
) {
  ctx.beginPath();
  ctx.arc(pos[0], pos[1], radius, 0, 2 * Math.PI);
  if (fill) {
    ctx.fillStyle = fill;
    ctx.fill();
  }
  if (stroke) {
    ctx.lineWidth = strokeWidth;
    ctx.strokeStyle = stroke;
    ctx.stroke();
  }
}

function drawStar(
  ctx: CanvasRenderingContext2D,
  pos: [number, number],
  radius: number,
  numPoints: number,
  innerRadius: number,
  angleDegrees: number
) {
  let angleAdd = angleDegrees * (Math.PI / 180);
  ctx.beginPath();
  for (let i = 0; i < numPoints * 2; i++) {
    const angle = (i * Math.PI) / numPoints - Math.PI / 2 + angleAdd;
    const radiusAtPoint = i % 2 === 0 ? radius : innerRadius;
    const xPos = pos[0] + radiusAtPoint * Math.cos(angle);
    const yPos = pos[1] + radiusAtPoint * Math.sin(angle);
    ctx.lineTo(xPos, yPos);
  }
  ctx.closePath();
  ctx.fillStyle = "white";
  ctx.fill();
}

interface Star {
  original_velocity: [number, number];
  original_size: number;
  position: [number, number];
  size: number;
  velocity: [number, number];
  numPoints: number;
  draw: (this: Star, ctx: CanvasRenderingContext2D) => void;
  update: (this: Star, width: number, height: number) => void;
}

function draw(this: Star, ctx: CanvasRenderingContext2D): void {
  if (this.size > 0.6) {
    drawStar(ctx, this.position, this.size, this.numPoints, this.size / 2, 40);
  } else {
    ctx.fillStyle = "white";
    ctx.fillRect(this.position[0], this.position[1], 0.5, 0.5);
  }
  // if (this.size < 1) {
  //
  // } else {
  //   drawCircle(ctx, this.position, this.size);
  //   let x = randInt(-1, 1);
  //   let y = randInt(-1, 1);
  //   ctx.fillRect(
  //     this.position[0],
  //     this.position[1],
  //     x * (this.size + 0.3),
  //     y * (this.size + 0.3)
  //   );
  // }
}

function update(this: Star, width: number, height: number): void {
  this.position[0] += this.velocity[0];
  this.position[1] += this.velocity[1];
  // const mult = 0.1;
  // this.size += mult * 0.01 * this.original_size ** 2;
  // this.velocity[0] += mult * 0.01 * this.original_velocity[0] ** 2;
  // this.velocity[1] += mult * 0.01 * this.original_velocity[1] ** 2;
  if (this.position[0] > width + 2 || this.position[1] > height + 2) {
    this.size = this.original_size;
    this.velocity[0] = this.original_velocity[0];
    this.velocity[1] = this.original_velocity[1];
    let choice = randInt(0, 1);
    if (choice) {
      this.position[0] = -2;
      this.position[1] = randInt(0, height);
    } else {
      this.position[0] = randInt(0, height);
      this.position[1] = -2;
    }
  }
}

function randInt(a: number, b: number): number {
  const min = Math.ceil(a);
  const max = Math.floor(b);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randNum(a: number, b: number): number {
  const min = Math.min(a, b);
  const max = Math.max(a, b);
  return Math.random() * (max - min) + min;
}

function populateStarList(
  starList: Star[],
  numStars: number,
  sizeRange: [number, number],
  speedMult: number,
  width: number,
  height: number
) {
  for (let i = 0; i < numStars; i++) {
    let size = randNum(sizeRange[0], sizeRange[1]);
    let vel = size * speedMult;
    if (vel < 0.11) {
      vel = 0.11;
    }
    let star: Star = {
      original_velocity: [vel, vel],
      original_size: size,
      position: [randInt(0, width), randInt(0, height)],
      size: size,
      velocity: [vel, vel],
      numPoints: [2, 4, 5][randInt(0, 2)],
      draw,
      update,
    };
    starList.push(star);
  }
}

function updateCanvasPixelRatio(
  canvasRef: React.MutableRefObject<HTMLCanvasElement | null>
) {
  const canvas = canvasRef.current;
  if (canvas) {
    const context = canvas.getContext("2d");
    if (context) {
      const pixelRatio = window.devicePixelRatio || 1;
      const canvasWidth = canvas.clientWidth * pixelRatio;
      const canvasHeight = canvas.clientHeight * pixelRatio;

      // Set the canvas width and height based on the pixel ratio
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;

      // Scale the canvas context to match the pixel ratio
      context.scale(pixelRatio, pixelRatio);
    }
  }
}

export default function Stars() {
  let dimensions = {
    height: 100,
    width: 100,
    max: 100,
  };

  function resetDimensions() {
    if (typeof window != "undefined") {
      dimensions = {
        height: window.innerHeight,
        width: window.innerWidth,
        max: Math.max(window.innerHeight, window.innerWidth),
      };
    }
  }
  resetDimensions();
  //ref to canvas
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // circle position
  let starList: Star[] = [];
  let numStars: number = 100;
  let sizeRange: [number, number] = [0.2, 2];
  let speedMult: number = 0.1;

  let smallStarList: Star[] = [];
  let smallSizeRange: [number, number] = [0.2, 0.3];

  populateStarList(
    starList,
    numStars,
    sizeRange,
    speedMult,
    dimensions.width,
    dimensions.height
  );

  // runs only on first render of component
  useEffect(() => {
    resetDimensions();
    updateCanvasPixelRatio(canvasRef);
  }, []);

  function handleResize() {
    resetDimensions();
    updateCanvasPixelRatio(canvasRef);

    starList = [];
    populateStarList(
      starList,
      numStars,
      sizeRange,
      speedMult,
      dimensions.width,
      dimensions.height
    );
  }

  const debouncedHandleResize = debounce(handleResize, 200); // 200ms delay

  // handle resize
  useEffect(() => {
    window.addEventListener("resize", debouncedHandleResize);
    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  }, []);

  // animate stars
  useEffect(() => {
    const canvas = canvasRef.current;
    let animationId: number | null = null;

    const animate = (canvas: HTMLCanvasElement) => {
      const context = canvas?.getContext("2d");
      if (context) {
        // Clear canvas
        context.clearRect(0, 0, canvas.width, canvas.height);

        starList.forEach((star) => {
          // Draw circle
          star.draw(context);

          //Update circle pos
          star.update(dimensions.width, dimensions.height);
        });
      }

      // Loop the animation
      animationId = requestAnimationFrame(() => animate(canvas));
    };

    const startAnimation = () => {
      if (canvas && typeof window !== "undefined") {
        // Start the animation loop
        animate(canvas);
      }
    };

    const stopAnimation = () => {
      if (animationId !== null) {
        cancelAnimationFrame(animationId);
      }
    };

    startAnimation();

    // Cleanup function
    return () => {
      stopAnimation();
    };
  });
  return (
    <canvas
      ref={canvasRef}
      className={`fade-in z-0 w-screen h-screen`}
    ></canvas>
  );
}
