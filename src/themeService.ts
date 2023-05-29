import { Mode } from "@anatoliygatt/dark-mode-toggle";

class ThemeService {
  private theme: Mode = "dark" as Mode;

  public getTheme(): Mode {
    return this.theme;
  }

  public setTheme(newTheme: Mode): void {
    this.theme = newTheme;
  }
}

export const themeService = new ThemeService();
