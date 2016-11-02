// es6

// state
// constructor/class
class Telé {
  constructor(brand, resolution, channel, on, volume, destroy) {
    this.brand = brand;
    this.resolution = resolution;
    this.channel = channel;
    this.on = on;
    this.volume = volume;
    this.destroy = false;
  }

  // behavior

  // getter
  get getPower() {
    return this.on;
  }

  get togglePower() {
    return this.on;
  };

  // setter
  set togglePower(bool) {
    this.on = bool;
  };

  // methods
  changeVolume(level) {
    if (level === 'up') {
      this.volume++;
    } else if (level === 'down') {
      this.volume--;
    }
  };

  destroyTv() {
    this.destroy = true;
  };
}

// instance
const leftTelé = new Telé('Vizio', '1920x1080', 'Herman', true, 8);

const rightTelé = new Telé('Vizio', '1920x1080', 'Reid', true, 3);

// methods
rightTelé.changeVolume('down');
rightTelé.changeVolume('down');
rightTelé.changeVolume('down');

// uses getter and setter
rightTelé.togglePower = false;

leftTelé.destroyTv();

console.log('Wes', rightTelé);
console.log('Michael', leftTelé);

// gets transcomplied down to es5 which is prototypal inheritence. Suger = makes it easier
