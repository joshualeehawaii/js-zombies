//Class Item
class Item {
  constructor(name){
    this.name = name;
  }
}
//Class Weapon Extended from Item
 class Weapon extends Item {
  constructor(name, damage){
    super(name);
    this.damage = damage;
  }
 }
//Class Food extended from Item
class Food extends Item {
  constructor(name, energy){
    super(name);
    this.energy = energy;
  }
 }
//Class Player
 class Player {
  constructor(name, health, strength, speed){
  this.name = name;
  this.health = health;
  this.strength = strength;
  this.speed = speed;
  this.isAlive = true;
  this.equipped = false;
  this._pack = [];
  this._maxHealth = health;
  }
  getPack(){
    return this._pack;
  }
  getMaxHealth(){
    return this._maxHealth;
  }
  takeItem(item){
    if (this._pack.length < 3){
    console.log(item);
    this._pack.push(item);
    return true;
    } else {
      console.log('pack is full, and item could not be stored');
      return false;
    }
  }
  discardItem(item){
  var itemIndex = this._pack.indexOf(item);
  if (itemIndex >= 1){
    this._pack.splice(itemIndex,1);
    console.log(this.name + ' ' + item + ' was discarded');
    return true;
    } else {
      console.log('nothing was discarded since item could not be found');
      return false;
    }
  }
  //add ==> checkPack(), equip(itemToEquip), eat(itemToEat), useItem(item), equippedWith()
}
//Class Zombie
class Zombie {
  constructor(health, strength, speed){
  this._maxHealth = health;
  this.health = health;
  this.strength = strength;
  this.speed = speed;
  this.isAlive = true;
  }
}
//Class Fast Zombie
class FastZombie extends Zombie {
  constructor(health, strength, speed){
  super(health, strength, speed);
  }
}
//Class Strong Zombie
class StrongZombie extends Zombie {
  constructor(health, strength, speed){
  super(health, strength, speed);
  }
}
//Class Ranged Zombie
class RangedZombie extends Zombie {
  constructor(health, strength, speed){
  super(health, strength, speed);
  }
}
//Class Exploding Zombie
class ExplodingZombie extends Zombie {
  constructor(health, strength, speed){
  super(health, strength, speed);
  }
}




/**
 * Sample run.
 * Feel free to edit this and check your game logic.
 */
function runGame() {
  // var player = new Player("Joan", 500, 30, 70);
  // var zombie = new Zombie(40, 50, 20);
  // var charger = new FastZombie(175, 25, 60);
  // var tank = new StrongZombie(250, 100, 15);
  // var spitter = new RangedZombie(150, 20, 20);
  // var boomer = new ExplodingZombie(50, 15, 10);

  // var shovel = new Weapon("shovel", 15);
  // var sandwich = new Food("sandwich", 30);
  // var chainsaw = new Weapon("chainsaw", 25);

  // player.takeItem(shovel);
  // player.takeItem(sandwich);
  // player.takeItem(chainsaw);
  // player.discardItem(new Weapon("scythe", 21));
  // player.discardItem(shovel);
  // player.checkPack();
  // player.takeItem(shovel);
  // player.checkPack();

  // player.equippedWith();
  // player.useItem(chainsaw);
  // player.equippedWith();
  // player.checkPack();

  // player.useItem(shovel);
  // player.equippedWith();
  // player.checkPack();

  // player.health = 487;
  // console.log("Before health: " + player.health);
  // player.useItem(sandwich);
  // console.log("After health: " + player.health);
  // player.checkPack();
}
