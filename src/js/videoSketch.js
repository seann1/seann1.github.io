import p5 from 'p5';

export const initVimeoSketch = () => {
    return new Promise(
        (resolve) =>
            new p5((p) => {
                const GRID_SIZE = 15;
                const BG_COLOR = [191, 189, 189];
                const DECAY = 0.99; // how slowly the wake fades (0.9 = fast, 0.99 = slow)

                let influenceGrid = [];
                let cols, rows;
                let touchX = 0;
                let touchY = 0;
                let isTouching = false;

                let pointerX = 0;
                let pointerY = 0;
                let pointerActive = false;

                const RAINBOW = [
                    [68, 1, 84], // darkest purple @ 0.00
                    [59, 82, 139], // dark blue      @ 0.25
                    [33, 145, 140], // teal           @ 0.50
                    [94, 201, 98], // light green    @ 0.75
                    [253, 231, 37], // yellow         @ 1.00
                ];

                const rainbowColor = (t) => {
                    // t in [0, 1]
                    const scaled = t * (RAINBOW.length - 1);
                    const i = Math.floor(scaled);
                    const f = scaled - i;
                    const a = RAINBOW[Math.min(i, RAINBOW.length - 1)];
                    const b = RAINBOW[Math.min(i + 1, RAINBOW.length - 1)];
                    return [
                        p.lerp(a[0], b[0], f),
                        p.lerp(a[1], b[1], f),
                        p.lerp(a[2], b[2], f),
                    ];
                };

                const initGrid = () => {
                    cols = Math.ceil(p.width / GRID_SIZE) + 1;
                    rows = Math.ceil(p.height / GRID_SIZE) + 1;
                    influenceGrid = Array.from(
                        { length: rows },
                        () => new Float32Array(cols)
                    );
                };

                p.setup = () => {
                    const container = document.getElementById(
                        'vimeoSketchContainer'
                    );
                    const canvas = p.createCanvas(
                        p.windowWidth,
                        p.windowHeight
                    );
                    canvas.parent(container);
                    canvas.style('position', 'fixed');
                    canvas.style('top', '0');
                    canvas.style('left', '0');
                    canvas.style('z-index', '-100');
                    canvas.style('pointer-events', 'none');
                    initGrid();

                    // Listen on document so pointer-events:none doesn't block us
                    // passive:true lets the browser still handle scrolling natively
                    document.addEventListener(
                        'touchmove',
                        (e) => {
                            pointerX = e.touches[0].clientX;
                            pointerY = e.touches[0].clientY;
                            pointerActive = true;
                        },
                        { passive: true }
                    );

                    document.addEventListener(
                        'touchstart',
                        (e) => {
                            pointerX = e.touches[0].clientX;
                            pointerY = e.touches[0].clientY;
                            pointerActive = true;
                        },
                        { passive: true }
                    );

                    document.addEventListener(
                        'touchend',
                        () => {
                            pointerActive = false;
                        },
                        { passive: true }
                    );
                    // Mouse listeners on document so pointer-events:none doesn't block them
                    document.addEventListener('mousemove', (e) => {
                        pointerX = e.clientX;
                        pointerY = e.clientY;
                        pointerActive = true;
                    });

                    document.addEventListener('mousedown', (e) => {
                        pointerX = e.clientX;
                        pointerY = e.clientY;
                        pointerActive = true;
                    });

                    document.addEventListener('mouseup', () => {
                        pointerActive = false;
                    });

                    // Optional: clear when leaving the window
                    window.addEventListener('blur', () => {
                        pointerActive = false;
                    });
                    resolve();
                };

                p.draw = () => {
                    p.background(...BG_COLOR);

                    cols = Math.ceil(p.width / GRID_SIZE) + 1;
                    rows = Math.ceil(p.height / GRID_SIZE) + 1;

                    // Use stored pointer coords when active, fall back to p5 mouse coords
                    const mx = pointerActive ? pointerX : p.mouseX;
                    const my = pointerActive ? pointerY : p.mouseY;

                    const maxInfluenceRadius = 200;

                    // Parameters for circle sizing
                    const MIN_RADIUS = 1; // smallest circle when far
                    const MAX_RADIUS = GRID_SIZE * 0.6;

                    for (let row = 0; row < rows; row++) {
                        for (let col = 0; col < cols; col++) {
                            const cx = col * GRID_SIZE + GRID_SIZE / 2;
                            const cy = row * GRID_SIZE + GRID_SIZE / 2;

                            const d = p.dist(cx, cy, mx, my);
                            const liveInfluence = p.constrain(
                                1 - d / maxInfluenceRadius,
                                0,
                                1
                            );

                            // Update stored influence: take the max of live and decayed stored value
                            influenceGrid[row][col] = Math.max(
                                liveInfluence,
                                influenceGrid[row][col] * DECAY
                            );
                            const influence = influenceGrid[row][col];

                            const [rr, gg, bb] = rainbowColor(influence);
                            p.noStroke();
                            p.fill(
                                p.lerp(191, rr, influence),
                                p.lerp(189, gg, influence),
                                p.lerp(189, bb, influence)
                            );

                            // radius gets smaller as distance increases (influence 0 -> MIN_RADIUS)
                            const radius = p.lerp(
                                MIN_RADIUS,
                                MAX_RADIUS,
                                influence
                            );

                            p.ellipse(cx, cy, radius * 2, radius * 2);
                        }
                    }
                };

                p.windowResized = () => {
                    const container = document.getElementById(
                        'vimeoSketchContainer'
                    );
                    p.resizeCanvas(
                        container.offsetWidth,
                        container.offsetHeight
                    );
                    initGrid();
                };
            })
    );
};
