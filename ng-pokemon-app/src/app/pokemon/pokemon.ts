export class Pokemon {

    id: number;
    name: string;
    hp: number;
    cp: number;
    picture: String;
    types: string[];
    created: Date;

    constructor(
        name: string = "Entrer un nom...",
        hp: number = 100,
        cp: number = 10,
        picture: String = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/xxx.png",
        types: string[] = ["Normal"],
        created: Date = new Date()
    ){
        this.name = name;
        this.hp = hp;
        this.cp = cp;
        this.picture = picture;
        this.types = types;
        this.created = created;
    }

}