uniform float time;
varying vec2 vUv;
varying float vElevation;

vec3 palette( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d )
{
    return a + b*cos( 6.28318*(c*t+d) );
}

void main()
{
    float strength = step(sin(time) * 0.9, sin(cnoise(vUv * 10.0) * 20.0));
    vec3 blackColor = vec3(1.0+(vElevation*8.0), sin(time)+vUv.x+(vElevation*2.0), -sin(time)+(vElevation*8.0));
    vec3 uvColor = palette(sin(time)*.001 + (sin(time)*.04)+vUv.x, vec3(0.608+(vElevation*8.0), 0.278+vUv.y, 0.500), vec3(0.550, 0.520, 0.520), vec3(1.948, 2.108, 1.888), vec3(0.528, 0.358, 0.858+vUv.y));
    vec3 mixedColor = mix(blackColor, uvColor, strength);
    gl_FragColor = vec4(mixedColor, 1.0);
}
