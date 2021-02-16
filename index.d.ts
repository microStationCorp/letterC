import { CharacterInterface } from "./interfaces";

declare module "letterc" {
  export function sum(num1: number, num2: number): number;
  export function wordCount(text: string): CharacterInterface[];
}
