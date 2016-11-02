// es5

// state
const Telé = function(brand, resolution, channel, on, volume, destroy) {
  this.brand = brand;
  this.resolution = resolution;
  this.channel = channel;
  this.on = on;
  this.volume = volume;
  this.destroy = false;
}

// behavior
Telé.prototype.togglePower = function () {
  this.on = false;
};

Telé.prototype.changeVolume = function (level) {
  if (level === 'up') {
    this.volume++;
  } else if (level === 'down') {
    this.volume--;
  }
};

Telé.prototype.destroyTv = function () {
  this.destroy = true;
};

const leftTelé = new Telé('Vizio', '1920x1080', 'Herman', true, 8);

const rightTelé = new Telé('Vizio', '1920x1080', 'Reid', true, 3);

rightTelé.changeVolume('down');
rightTelé.changeVolume('down');
rightTelé.changeVolume('down');
rightTelé.togglePower();

leftTelé.destroyTv();

console.log('Wes', rightTelé);
console.log('Michael', leftTelé);
