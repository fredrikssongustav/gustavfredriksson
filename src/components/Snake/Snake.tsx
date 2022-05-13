import React, { useRef, useEffect } from "react";

export const Snake = () => {
  const ref = useRef<HTMLCanvasElement | null>(null);

  const WIDTH = window.innerWidth * 2;
  const HEIGHT = window.innerHeight * 2;

  const SNAKE_HEAD = 30;

  const direction = useRef(1);
  const position = useRef([Math.random() * WIDTH, Math.random() * HEIGHT]);

  useEffect(() => {
    const DIRECTIONS = [
      [SNAKE_HEAD, 0],
      [0, SNAKE_HEAD],
      [-SNAKE_HEAD, 0],
      [0, -SNAKE_HEAD],
    ];

    const canvas = ref.current;
    const ctx = ref.current?.getContext("2d");

    if (!ctx || !canvas) return;

    const draw = () => {
      setTimeout(() => {
        ctx.fillStyle = "#f1f1f1";
        const [x, y] = position.current;
        const [dx, dy] = DIRECTIONS[direction.current];

        let newX = (x + dx) % WIDTH;
        let newY = (y + dy) % HEIGHT;

        if (newX < -SNAKE_HEAD) newX = WIDTH;
        if (newY < -SNAKE_HEAD) newY = HEIGHT;

        ctx.fillRect(x, y, SNAKE_HEAD + 1, SNAKE_HEAD + 1);
        position.current = [newX, newY];
        draw();
      }, 100);
    };

    document.addEventListener("keydown", function (e) {
      switch (e.keyCode) {
        case 37:
          direction.current = direction.current === 0 ? 0 : 2;
          break;
        case 38:
          direction.current = direction.current === 1 ? 1 : 3;
          break;
        case 39:
          direction.current = direction.current === 2 ? 2 : 0;
          break;
        case 40:
          direction.current = direction.current === 3 ? 3 : 1;
          break;
        default:
          break;
      }
    });

    draw();
  }, [HEIGHT, WIDTH]);

  return (
    <canvas
      ref={ref}
      width={WIDTH}
      height={HEIGHT}
      style={{
        position: "absolute",
        zIndex: 10,
        width: "100vw",
        height: "100vh",
      }}
    />
  );
};
