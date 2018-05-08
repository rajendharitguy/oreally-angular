export interface Ingradients {
 Ingradient: string;
 measure: string;
}

export interface Instructions {
    Instruction: string;
    photo: string;
}

export class Items {
public title: string;
public description: string;
public Ingradients: Ingradients[];
public Instructions: Instructions[];
public cover_photo: string;


 constructor(t: string, d: string, ing: Ingradients[], ins: Instructions[], cpt: string) {
    this.title = t;
    this.description = d;
    this.Ingradients = ing;
    this.Instructions = ins;
    this.cover_photo = cpt;
 }
}
