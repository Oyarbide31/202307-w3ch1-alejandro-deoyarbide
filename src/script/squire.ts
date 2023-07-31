
class squire extends Character{
  constructor(public name: string, family: string, age : number,state: boolean, serverTo: string,servility:number){
    super(name,family,age,state, serverTo,servility);

    function greeting=(name)=>{

      console.log(`Yo soy el escudero ${this.name}, Soy un loser`);
    }

}

}
