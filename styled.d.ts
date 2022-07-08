// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      EB5757: string;
      "333333": string;
      BDBDBD: string;
      "4F4F4F": string;
      F2F2F2: string;
      white: string;
    };
    fonts: {
      Montserrat: string;
      Mulish: string;
    };
    weights: {
      400: number;
      500: number;
      600: number;
      700: number;
      800: number;
    };
    sizes: {
      9: number;
      10: number;
      12: number;
      14: number;
      16: number;
      18: number;
      24: number;
    };
    medium: string;
    big: string;
  }
}
