import React, { useEffect, useRef } from 'react';
import { SpaceScene } from '../scene/SpaceScene.js';

export default function WhnxtSpaceCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Instantiate the authentic SpaceScene from wht.nxt
    const spaceScene = new SpaceScene(canvas);

    return () => {
      if (spaceScene && typeof spaceScene.destroy === 'function') {
        spaceScene.destroy();
      }
    };
  }, []);

  return (
    <div id="webgl-container" style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 1, pointerEvents: 'none' }}>
      <canvas ref={canvasRef} id="space-canvas" style={{ width: '100%', height: '100%', display: 'block' }} />
    </div>
  );
}
