import React, { useLayoutEffect, useRef } from 'react';
import p5 from 'p5';

const Sketch: React.FC = () => {
  const sketchRef = useRef<HTMLDivElement>(null);
  const p5InstanceRef = useRef<p5 | null>(null);

  useLayoutEffect(() => {
    if (!sketchRef.current) return;

    if (p5InstanceRef.current) {
      p5InstanceRef.current.remove();
      p5InstanceRef.current = null;
    }
    sketchRef.current.innerHTML = '';

    const sketch = (p: p5) => {
      const spacing = 8;

      p.setup = () => {
        p.createCanvas(600, 300);
        p.pixelDensity(Math.max(2, p.displayDensity()));
      };

      p.draw = () => {
        p.clear();

        p.randomSeed(999);
        p.noiseSeed(999);

        p.stroke(0, 0, 0, 15);
        p.strokeWeight(1);
        for (let i = 0; i < 3000; i++) {
          p.point(p.random(p.width), p.random(p.height));
        }

        const isHovering = (p.mouseX >= 0 && p.mouseX <= p.width && p.mouseY >= 0 && p.mouseY <= p.height);

        p.noFill();

        for (let x = 0; x < p.width; x += spacing) {
          for (let y = 0; y < p.height; y += spacing) {
            const jx = x + p.random(-3, 3);
            const jy = y + p.random(-3, 3);

            const ty = p.height / 2 + (p.noise(jx * 0.006) - 0.6) * 220;

            const pathWidth = 35 + p.noise(jx * 0.01 + 100) * 20;

            const distToCenter = Math.abs(jy - ty);
            const distToMouse = p.dist(jx, jy, p.mouseX, p.mouseY);

            if (distToCenter > pathWidth) {
              p.stroke(0, 0, 0, 90);
              p.strokeWeight(0.5);
              p.push();
              p.translate(jx, jy);

              let baseAngle = -p.HALF_PI + (p.noise(jx * 0.01, jy * 0.01) - 0.5) * 1.5;

              if (isHovering && distToMouse < 70) {
                const angleToMouse = p.atan2(p.mouseY - jy, p.mouseX - jx);
                const intensity = p.map(distToMouse, 0, 70, 1, 0);
                baseAngle = p.lerp(baseAngle, angleToMouse + p.PI, intensity);
              }

              p.rotate(baseAngle);

              for (let k = 0; k < 3; k++) {
                p.line(p.random(-1, 1), p.random(-1, 1), p.random(8, 15), p.random(-1, 1));
              }
              p.pop();

              if (p.random() > 0.98) {
                p.push();
                p.translate(jx, jy);
                p.stroke(0, 0, 0, 180);
                p.strokeWeight(0.6);
                
                const sticks = 8;
                for (let i = 0; i < sticks; i++) {
                  p.line(0, 0, 0, p.random(-3, -7));
                  p.rotate(p.TWO_PI / sticks);
                }
                p.pop();
              }

            } else if (distToCenter > pathWidth - 12) {
              if (p.random() > 0.4) {
                p.stroke(0, 0, 0, 150);
                p.strokeWeight(0.8);
                p.noFill();
                p.push();
                p.translate(jx, jy);

                if (isHovering && distToMouse < 50) {
                  p.translate((jx - p.mouseX) * 0.05, (jy - p.mouseY) * 0.05);
                }

                p.beginShape();
                const r = p.random(2, 6);
                for (let a = 0; a < p.TWO_PI; a += p.PI / 4) {
                  p.vertex(p.cos(a) * (r + p.random(-1.5, 1.5)), p.sin(a) * (r + p.random(-1.5, 1.5)));
                }
                p.endShape(p.CLOSE);
                p.pop();
              }
            } else {
              if (p.random() > 0.7) {
                p.stroke(0, 0, 0, 60);
                p.strokeWeight(0.5);
                p.push();
                p.translate(jx, jy);
                p.rotate(p.random(-0.2, 0.2));

                if (isHovering && distToMouse < 40) {
                  p.strokeWeight(1.5);
                  p.stroke(0, 0, 0, 120);
                }

                p.line(-p.random(1, 3), 0, p.random(1, 3), 0);
                p.pop();
              }
            }
          }
        }
      };
    };

    p5InstanceRef.current = new p5(sketch, sketchRef.current);

    return () => {
      if (p5InstanceRef.current) {
        p5InstanceRef.current.remove();
        p5InstanceRef.current = null;
      }
      if (sketchRef.current) {
        sketchRef.current.innerHTML = '';
      }
    };
  }, []);

  return <div ref={sketchRef} className="sketch-container-boxed" />;
};

export default Sketch;