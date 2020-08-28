import { BrowserWindow } from 'electron';

export default class Window {
  static readonly instance = new Window();

  private window: BrowserWindow;

  private constructor() {}

  get getWindow(): BrowserWindow {
    return this.window;
  }

  set setWindow(win: BrowserWindow) {
    this.window = win;
  }
}
