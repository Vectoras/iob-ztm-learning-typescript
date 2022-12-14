// importing npm modules
import axios, { AxiosResponse } from 'axios';

// importing classes (and asociated interfaces)
import { Eventing } from './Eventing';

// ----------------------------------

export class Collection<T, K> {
  models: T[] = [];
  events: Eventing = new Eventing();

  constructor(
    public rootUrl: string, //
    public deserialize: (json: K) => T
  ) {}

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  fetch(): void {
    axios
      .get(this.rootUrl) //
      .then((response: AxiosResponse) => {
        response.data.forEach((value: K) => {
          this.models.push(this.deserialize(value));
        });
      })
      .then(() => {
        this.trigger('change');
      });
  }
}
