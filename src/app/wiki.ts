export class Wiki {

    word: string;
    score: number;

    constructor(values: Object = {}){
        Object.assign(this, values);
    }
}
