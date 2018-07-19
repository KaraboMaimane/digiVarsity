export class Course{
    url: string;
    name: string;
    description: string;
    pricing: number;
    rating: number;

    constructor(url:string ,name: string, description: string, pricing: number){
        this.url = url;
        this.name = name;
        this.description = description;
        this.pricing = pricing;
    }
}

let courseArray = [];

export default courseArray;