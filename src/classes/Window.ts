import { BrowserWindow } from 'electron';
import icons from '../UI/icons';

export default class Window {
  static readonly instance = new Window();

  private window: BrowserWindow;

  private constructor() {
    this.window = new BrowserWindow({
      icon: icons.logo
    });
  }

  get getWindow(): BrowserWindow {
    return this.window;
  }

}
