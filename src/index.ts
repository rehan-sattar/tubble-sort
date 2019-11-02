import { NumbersCollection } from './NumbersCollection';
import { CharacterCollection } from './CharacterCollection';
import { Sorter } from './Sorter';

const numbersCollection = new NumbersCollection([1, 30, -2, 2]);
const s = new Sorter(numbersCollection);
s.sort();

const charactersCollection = new CharacterCollection('wXwzeaYb');
const sorter = new Sorter(charactersCollection);
sorter.sort();
