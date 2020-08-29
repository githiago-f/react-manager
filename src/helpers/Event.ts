type Handlers = keyof (typeof Events.handlers)

class Events {
  static handlers = {
    'OPEN_EVENT': [],
    'UPDATE_MENU': [],
    'CREATING_PROJECT': []
  };

  static readonly instance = new Events();
  private constructor(){}

  register(eventName: Handlers, event: Function) {
    Events.handlers[eventName].push(event);
  }

  notify(handler: Handlers) {
    Events.handlers[handler].forEach(fn => fn());
  }
}

export default Events.instance;
