export class Rhyme {

    word: string;
    score: number;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
