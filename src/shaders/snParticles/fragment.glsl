varying float vAlpha;
varying float vSize;
void main() {
    // Soft circular glow
    float d = length(gl_PointCoord - vec2(0.5));
    if (d > 0.5) discard;
    float glow = 1.0 - smoothstep(0.0, 0.5, d);
    glow = pow(glow, 1.8);

    // Warm yellow-green (large) vs cool blue (small)
    // vSize ranges ~0.6 (small) to 1.0 (large), normalize to 0–1
    float sizeFactor = (vSize - 0.8) / 0.4;
    vec3 warmColor = mix(vec3(0.9, 1.0, 0.3), vec3(0.4, 1.0, 0.2), d * 2.0);
    vec3 coolColor = mix(vec3(0.2, 0.9, 1.0), vec3(1.0, 0.2, 0.2), d * 2.0); // blue for small particles
    vec3 color = mix(coolColor, warmColor, sizeFactor);

    gl_FragColor = vec4(color, glow * vAlpha * 0.85);
}