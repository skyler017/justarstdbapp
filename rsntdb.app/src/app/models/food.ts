export class Food {
    id: number;
    name: string;
    cuisineid: number;

    constructor(id:number, name:string, cuisineid:number)
    {
        this.id = id;
        this.name = name;
        this.cuisineid = cuisineid;
    }
}
