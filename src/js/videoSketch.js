import p5 from 'p5';

const sketch = (p) => {
    const GRID_SIZE = 15;
    const BG_COLOR = [191, 189, 189];
    const DECAY = 0.99; // how slowly the wake fades (0.9 = fast, 0.99 = slow)

    let influenceGrid = [];
    let cols, rows;
    let touchX = -1000;
    let touchY = -1000;

    const RAINBOW2 = [
        [148, 0, 211], // violet  @ 0.0
        [0, 0, 255], // blue    @ 0.2
        [0, 255, 255], // cyan    @ 0.4
        [0, 255, 0], // green   @ 0.6
        [255, 255, 0], // yellow  @ 0.8
        [255, 0, 0], // red     @ 1.0
    ];

    const RAINBOW = [
        [68, 1, 84], // darkest purple @ 0.00
        [59, 82, 139], // dark blue      @ 0.25
        [33, 145, 140], // teal           @ 0.50
        [94, 201, 98], // light green    @ 0.75
        [253, 231, 37], // yellow         @ 1.00
    ];

    const RAINBOW3 = [
        [166, 3, 79], // $secondary-color @ 0.0 (low influence)
        [183, 255, 0], // $tertiary-color  @ 1.0 (high influence)
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
        const container = document.getElementById('vimeoSketchContainer');
        const canvas = p.createCanvas(p.windowWidth, p.windowHeight);
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
                touchX = e.touches[0].clientX;
                touchY = e.touches[0].clientY;
            },
            { passive: true }
        );

        document.addEventListener(
            'touchstart',
            (e) => {
                touchX = e.touches[0].clientX;
                touchY = e.touches[0].clientY;
            },
            { passive: true }
        );

        document.addEventListener(
            'touchend',
            () => {
                touchX = -1000;
                touchY = -1000;
            },
            { passive: true }
        );
    };

    p.draw = () => {
        p.background(...BG_COLOR);

        cols = Math.ceil(p.width / GRID_SIZE) + 1;
        rows = Math.ceil(p.height / GRID_SIZE) + 1;

        // Use stored touch coords, fall back to mouse
        const mx = touchX !== -1000 ? touchX : p.mouseX;
        const my = touchY !== -1000 ? touchY : p.mouseY;

        // const mx = p.mouseX ?? 0;
        // const my = p.mouseY ?? 0;
        const maxInfluenceRadius = 200;

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

                const bow = p.lerp(-0.4, 1, influence);
                const r = GRID_SIZE * 0.5;
                const c = bow * r;

                const tx = cx,
                    ty = cy - r;
                const rx = cx + r,
                    ry = cy;
                const bx = cx,
                    by = cy + r;
                const lx = cx - r,
                    ly = cy;

                p.beginShape();
                p.vertex(tx, ty);
                p.bezierVertex(tx + c, ty, rx, ry - c, rx, ry);
                p.bezierVertex(rx, ry + c, bx + c, by, bx, by);
                p.bezierVertex(bx - c, by, lx, ly + c, lx, ly);
                p.bezierVertex(lx, ly - c, tx - c, ty, tx, ty);
                p.endShape(p.CLOSE);
            }
        }
    };

    p.windowResized = () => {
        const container = document.getElementById('vimeoSketchContainer');
        p.resizeCanvas(container.offsetWidth, container.offsetHeight);
        initGrid();
    };
};

export const initVimeoSketch = () => {
    new p5(sketch);
};
