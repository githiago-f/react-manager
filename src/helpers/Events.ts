type Handlers = keyof (typeof Events.handlers)

class Events {
  static handlers = {
    'INIT_CREATION': [],
    'UPDATE_MENU': [],
    'CREATING_PROJECT': []
  };

  static readonly instance = new Events();
  private constructor(){}

  register(eventName: Handlers, event: Function) {
    Events.handlers[eventName].push(event);
  }

  notify(handler: Handlers, ...args: any[]) {
    Events.handlers[handler].forEach(fn => fn(...args));
  }
}

export default Events.instance;
