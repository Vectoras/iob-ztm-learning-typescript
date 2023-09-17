// importing npm modules
import 'reflect-metadata';
import { AppRouter } from '../../AppRouter';
// importing enums
import { Methods } from './Methods';
import { MetadataKeys } from './MetadataKeys';

// -------------------------------------------------------

export function bodyValidator(...keys: string[]) {
  return function (target: any, key: string, desc: PropertyDescriptor) {
    Reflect.defineMetadata(MetadataKeys.validator, keys, target, key);
  };
}
