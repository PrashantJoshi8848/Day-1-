export {};

// ts variable declear / dynamic types/
let app: number = 12;
let ball: string = "hello";
let info: any = "hi" || 1;

let opt: [string, boolean];
opt = ["hello", true];

// ts for begginer functions

function a(x: number, y: number): number {
  return x + y;
}
console.log(a(2, 3));

// ts for object/interface
interface detail {
  Name: String;
  Age: number;
}

let obje: detail = {
  Name: "prashantJoshi",
  Age: 24,
};

// inheriance in type script
class games {
  name: string;
  addname(names: string) {
    this.name = names;
  }
}
class apple extends games {
  getname(): void {
    console.log(this.name);
  }
}

let game = new games();
// names.addname("prashant");
let apples = new apple();
apples.getname();
