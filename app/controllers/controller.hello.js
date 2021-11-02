class HelloController {
  constructor() {
    this._msg = 'Hello World';
  }

  message() {
    return this._msg;
  }
}

export default HelloController;
