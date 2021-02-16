declare module "letterc" {
  export function sum(num1: number, num2: number): number;
  export function wordCount(text: string): CharacterInterface[];
  export interface CharacterInterface {
    char: string | undefined;
    num: number;
    symbol?: string;
  }

  export interface SymbolInterface {
    name: string;
    symbol: string;
  }
}
