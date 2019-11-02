import { NumbersCollection } from './NumbersCollection';

class Sorter {
  constructor(public data: NumbersCollection) {}

  sort() {
    const len = this.data.length;
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len - i - 1; j++) {
        if (this.data.compare(j, j + 1)) {
          this.data.swap(j, j + 1);
        }
      }
    }
  }
}

const numbersCollection = new NumbersCollection([1, 30, -2, 2]);
const s = new Sorter(numbersCollection);
s.sort();
