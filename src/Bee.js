class Bee extends Grub {
  constructor() {
    // Must call super constructor in derived class before accessing 'this' or returning from derived constructor
    super();
    this.age = 5;
    this.color = 'yellow';
    this.job = 'Keep on growing';
  }
};
