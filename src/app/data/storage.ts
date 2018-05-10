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
public feeds_this_many: number;
public preparation_time: number;
public Ingradients: Ingradients[];
public Instructions: Instructions[];
public cover_photo: string;


 constructor(t: string, d: string, fee: number, pre: number, ing: Ingradients[], ins: Instructions[], cpt: string) {
    this.title = t;
    this.description = d;
    this.feeds_this_many = fee;
    this.preparation_time = pre;
    this.Ingradients = ing;
    this.Instructions = ins;
    this.cover_photo = cpt;
 }

  public static createBlank() {
      return new Items('', '', 2, 1, null, null, null);
  }
}
