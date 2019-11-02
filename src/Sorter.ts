interface Sortable {
  length: number;
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
}

export class Sorter {
  constructor(public data: Sortable) {}

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
