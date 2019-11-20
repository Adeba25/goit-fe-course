class Car {
  /*
   * Добавь статический метод `getSpecs(car)`,
   * который принимает объект-машину как параметр и выводит
   * в консоль значения свойств maxSpeed, speed, isOn, distance и price.
   */
  static getSpecs({ maxSpeed, speed, isOn, distance, price }) {
    return console.table(
      `maxSpeed: ${maxSpeed}, speed: ${speed}, isOn: ${isOn}, distance: ${distance}, price: ${price}`
    );
  }

  /*
   * Конструктор получает объект настроек.
   *
   * Добавь свойства будущеего экземпляра класса:
   *  speed - текущая скорость, изначально 0
   *  price - цена автомобиля
   *  maxSpeed - максимальная скорость
   *  isOn - заведен ли автомобиль, значения true или false. Изначально false
   *  distance - общий киллометраж, изначально 0
   */
  constructor({ speed = 0, price, maxSpeed, isOn = false, distance = 0 }) {
    this.speed = speed;
    this._price = price;
    this.maxSpeed = maxSpeed;
    this.isOn = isOn;
    this.distance = distance;
  }

  /*
   * Добавь геттер и сеттер для свойства price,
   * который будет работать с свойством цены автомобиля.
   */
  get price() {
    return this._price;
  }
  set price(value) {
    this._price = value;
  }

  /*
   * Добавь код для того чтобы завести автомобиль
   * Записывает в свойство isOn значение true
   */
  turnOn() {
    this.isOn = true;
  }

  /*
   * Добавь код для того чтобы заглушить автомобиль
   * Записывает в свойство isOn значение false,
   * и сбрасывает текущую скорость в 0
   */
  turnOff() {
    this.isOn = false;
    this.speed = 0;
  }

  /*
   * Добавялет к свойству speed полученное значение,
   * при условии что результирующая скорость
   * не больше чем значение свойства maxSpeed
   */
  accelerate(value) {
    if (this.maxSpeed > this.speed + value) {
      this.speed += value;
    }
  }

  /*
   * Отнимает от свойства speed полученное значение,
   * при условии что результирующая скорость не меньше нуля
   */
  decelerate(value) {
    if (this.speed - value > 0) {
      this.speed -= value;
    }
  }

  /*
   * Добавляет в поле distance киллометраж (hours * speed),
   * но только в том случае если машина заведена!
   */
  drive(hours) {
    if (this.isOn === true) {
      this.distance += this.speed * hours;
    }
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 30, isOn: false, distance: 130, price: 2000

// По условию задания написано speed: 30, но это невозмножно т.к. метод turnOff() скидывает скорость на 0 что тоже указано в условии задания

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
