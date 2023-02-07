class Hero{
  constructor(hp=100){
    this.hp=hp;
  }

  showHP(){console.log(this.hp)}
  run(){this.hp-=10;}
}


const batman=new Hero();

batman.showHP();
batman.run();
batman.run();
batman.showHP();