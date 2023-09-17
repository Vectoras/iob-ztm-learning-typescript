import 'reflect-metadata';

const plane = {
  color: 'red',
};

// --- metadata to prototype of class by decorator -----------------------

@controller
class Plane {
  color: string = 'red';

  @get('/login')
  fly(): void {
    console.log('vrrrrrrrrrrrrrrrrr');
  }
}

function get(path: string) {
  return function (target: Plane, key: string) {
    Reflect.defineMetadata('path', path, target, key);
  };
}

function controller(target: typeof Plane) {
  for (let key in target.prototype) {
    const path = Reflect.getMetadata('path', target.prototype, key);
    const middleware = Reflect.getMetadata('middleware', target.prototype, key);

    // router.get(path, target.prototype[key]);
  }
}

// console.log(new Plane());

// --- metadata to property of object ------------------------------------

// Reflect.defineMetadata('note', 'hi there property', plane, 'color');

// const note = Reflect.getMetadata('note', plane, 'color');

// console.log(note);

// --- metadata to object ------------------------------------------------

// Reflect.defineMetadata('note', 'hi there', plane);

// console.log(plane);

// const note = Reflect.getMetadata('note', plane);

// console.log(note);
