interface Reportable {
  // name: string;
  // year: Date;
  // broken: boolean;
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: new Date(2000),
  broken: true,
  summary() {
    return `Name: ${this.name}`;
  },
};

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.suger} grams of sugar`;
  },
};

const printSummary = (item: Reportable): void => {
  console.log(`Name: ${item.summary()}`);
};

printSummary(oldCivic);
printSummary(drink);
