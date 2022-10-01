import { UserProps } from './User';

// ----------------------------------------

export class Attributes<T> {
  constructor(private data: T) {}

  get = <K extends keyof T>(key: K): T[K] => {
    return this.data[key];
  };

  set(update: T): void {
    Object.assign(this.data, update);
  }

  getAll(): T {
    return this.data;
  }
}

const attrs = new Attributes<UserProps>({
  id: 5,
  age: 20,
  name: 'asdf',
});

const name = attrs.get('name');
const age = attrs.get('age');

/* --- experiments --------------------------
const n: number = 2;
const s: string = 'string';

type tn = typeof n;
type ts = typeof s;

type o = {
  ps: string;
  pn: number;
};

type tos = o['ps'];

interface I {
  ps: string;
  pn: number;
}

type tos = I['ps'];
*/
