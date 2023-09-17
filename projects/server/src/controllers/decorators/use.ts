// importing for sideeffects
import 'reflect-metadata';
// importing npm modules
import { RequestHandler } from 'express';
// importing enums
import { MetadataKeys } from './MetadataKeys';

export function use(middleware: RequestHandler) {
  return function (target: any, key: string, desc: PropertyDescriptor) {
    const middlewares =
      Reflect.getMetadata(
        MetadataKeys.middleware, //
        target,
        key
      ) || [];

    Reflect.defineMetadata(MetadataKeys.middleware, [...middlewares, middleware], target, key);
  };
}
