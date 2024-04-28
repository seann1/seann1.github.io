varying vec2 vUv;
uniform float time;

vec3 palette( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d )
{


    return a + b*cos( 6.28318*(c*t+d) );
}


void main()
{
    vec2 uv = vUv;
    vec2 uv0 = uv;

    vec3 finalColor = vec3(0.0);

    for (float i = 0.0; i < 3.0; i++) {

        uv = fract(uv * 1.5) - 0.5;

        float d = length(uv) * exp(length(uv0));

        vec3 col = palette(length(uv0) + i*.4 + (time*.4), vec3(0.608, 0.278, 0.500), vec3(0.550, 0.520, 0.520), vec3(1.948, 2.108, 1.888), vec3(0.528, 0.358, 0.858));

        d = sin(d * (8.0 - i) + time)/8.0;
        d = abs(d);

        d = pow(0.01 / d, 1.2);

        finalColor += col * d;
    }

    // Output to screen
    gl_FragColor = vec4(finalColor, 1.0);
}
