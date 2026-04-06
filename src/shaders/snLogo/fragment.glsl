varying vec3 vNormal;
varying vec3 vPosition;
varying float vNoise;

uniform vec3 uBaseColor;
uniform vec3 uLightDir;
uniform vec3 uLightColor;
uniform float uRimStrength;

void main() {
    vec3 normal = normalize(vNormal);
    vec3 lightDir = normalize(uLightDir);
    vec3 viewDir = normalize(-vPosition);

    float diff = max(dot(normal, lightDir), 0.0);

    vec3 halfDir = normalize(lightDir + viewDir);
    float spec = pow(max(dot(normal, halfDir), 0.0), 64.0);

    float rim = 1.0 - max(dot(viewDir, normal), 0.0);
    rim = pow(rim, 3.0) * uRimStrength;

    float noiseValue = clamp(vNoise *0.5 +0.5,0.0,1.0);

    float yellowMask = smoothstep(0.2,0.8, noiseValue);
    float blueMask = step(noiseValue, 0.4); // 1.0 if noiseValue is < 0.2, else 0.0

    vec3 yellowColor = vec3(1.0,0.9,0.1);
    vec3 darkBlueColor = vec3(0.0, 0.0, 0.5); // Define dark blue

    vec3 baseColor = mix(uBaseColor, yellowColor, yellowMask);
    baseColor = mix(baseColor, darkBlueColor, blueMask);

    vec3 ambient = baseColor * 0.2;
    vec3 diffuse = baseColor * uLightColor * diff;
    vec3 specular = uLightColor * spec * 0.5;
    vec3 rimColor = vec3(0.643, 0.012, 0.31) * rim;

    gl_FragColor = vec4(ambient + diffuse + specular + rimColor, 1.0);
}
