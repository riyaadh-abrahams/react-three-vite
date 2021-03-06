import { shaderMaterial } from "@react-three/drei";
import vertextShader from "./vert.glsl";
import fragmentShader from "./frag.glsl";
import * as THREE from "three";
import { extend } from "@react-three/fiber";

const ColorShiftMaterial = shaderMaterial(
  { time: 0, color: new THREE.Color() },
  vertextShader,
  fragmentShader
);

extend({ ColorShiftMaterial });

/**
 * Material Typings
 * This is used to ensure that typescrript will work properly with the custom material
 */
type ColorShiftMaterialType = {
  time: number;
  color: THREE.ColorRepresentation;
} & JSX.IntrinsicElements["shaderMaterial"];

declare global {
  namespace JSX {
    interface IntrinsicElements {
      colorShiftMaterial: ColorShiftMaterialType;
    }
  }
}
