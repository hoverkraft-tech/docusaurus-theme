export interface ThemeConfig {
  hoverkraft?: {
    colors?: {
      primary?: string;
      secondary?: string;
      accent?: string;
    };
    logo?: {
      src: string;
      alt?: string;
      href?: string;
    };
    customCss?: string[];
  };
}
