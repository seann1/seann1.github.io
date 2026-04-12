attribute vec3 aSeed;
uniform float uTime;
uniform float uSize;
uniform vec2 uMouse; // normalized mouse position in world space

varying float vAlpha;
varying float vSize;

vec3 hash3(vec3 p) {
    p = vec3(dot(p, vec3(127.1, 311.7, 74.7)),
    dot(p, vec3(269.5, 183.3, 246.1)),
    dot(p, vec3(113.5, 271.9, 124.6)));
    return -1.0 + 2.0 * fract(sin(p) * 43758.5453123);
}

float perlinNoise(vec3 p) {
    vec3 i = floor(p);
    vec3 f = fract(p);
    vec3 u = f * f * (3.0 - 2.0 * f);

    return mix(mix(mix(dot(hash3(i + vec3(0,0,0)), f - vec3(0,0,0)),
    dot(hash3(i + vec3(1,0,0)), f - vec3(1,0,0)), u.x),
    mix(dot(hash3(i + vec3(0,1,0)), f - vec3(0,1,0)),
    dot(hash3(i + vec3(1,1,0)), f - vec3(1,1,0)), u.x), u.y),
    mix(mix(dot(hash3(i + vec3(0,0,1)), f - vec3(0,0,1)),
    dot(hash3(i + vec3(1,0,1)), f - vec3(1,0,1)), u.x),
    mix(dot(hash3(i + vec3(0,1,1)), f - vec3(0,1,1)),
    dot(hash3(i + vec3(1,1,1)), f - vec3(1,1,1)), u.x), u.y), u.z);
}

void main() {
    vec3 pos = position;

    float riseSpeed = aSeed.y;
    float t = mod(uTime * riseSpeed * 0.18 + aSeed.x, 1.0);
    pos.y += mix(-0.3, 0.5, t);

    pos.x += sin(uTime * 0.6 + aSeed.z) * 0.06;
    pos.z += cos(uTime * 0.5 + aSeed.x) * 0.04;

    // Perlin noise flow field
    float noiseScale = 2.5;
    float timeScale = 0.3;
    vec3 noisePos = pos * noiseScale + vec3(uTime * timeScale);

    float nx = perlinNoise(noisePos);
    float ny = perlinNoise(noisePos + vec3(31.4));
    float nz = perlinNoise(noisePos + vec3(67.1));

    float noiseStrength = 0.1;
    pos.x += nx * noiseStrength;
    pos.y += ny * noiseStrength * 0.5;
    pos.z += nz * noiseStrength;

    // Subtle mouse attraction
    vec2 toMouse = uMouse - pos.xz;
    float dist = length(toMouse);
    float influence = 1.0 / (1.0 + dist * dist * 8.0); // falls off with distance
    pos.x += toMouse.x * influence * 0.2;
    pos.z += toMouse.y * influence * 0.2;

    float fade = sin(t * 3.14159);
    vAlpha = fade * (0.5 + 0.5 * sin(uTime * 3.0 + aSeed.x * 6.0));
    vSize = 0.6 + 0.4 * fade;

    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_PointSize = uSize * (1.0 / -mvPosition.z) * (0.6 + 0.4 * fade);
    gl_Position = projectionMatrix * mvPosition;
}
