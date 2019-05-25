export class ApiQuery {
  constructor(queryFor: any);
  queryFor: any;
  all(filter: any): any;
  find(id: any): any;
  where(filter: any): any;
}
export const Card: any;
export const CardFilter: any;
export const Cards: {
  all: Function;
  find: Function;
  queryFor: string;
  where: Function;
};
export namespace Formats {
  function all(): any;
}
export class MagicEmitter {
  static defaultMaxListeners: any;
  static init(): void;
  static listenerCount(emitter: any, type: any): any;
  static usingDomains: boolean;
  constructor(...args: any[]);
  addListener(type: any, listener: any): any;
  cancel(): void;
  emit(event: any, data: any): any;
  eventNames(): any;
  getMaxListeners(): any;
  listenerCount(type: any): any;
  listeners(type: any): any;
  off(type: any, listener: any): any;
  on(event: any, listener: any): any;
  once(type: any, listener: any): any;
  prependListener(type: any, listener: any): any;
  prependOnceListener(type: any, listener: any): any;
  rawListeners(type: any): any;
  removeAllListeners(type: any, ...args: any[]): any;
  removeListener(type: any, listener: any): any;
  setMaxListeners(n: any): any;
}
export namespace MagicEmitter {
  class EventEmitter {
    // Circular reference from Magic.MagicEmitter.EventEmitter
    static EventEmitter: any;
    static defaultMaxListeners: any;
    static init(): void;
    static listenerCount(emitter: any, type: any): any;
    static usingDomains: boolean;
    addListener(type: any, listener: any): any;
    emit(type: any, args: any): any;
    eventNames(): any;
    getMaxListeners(): any;
    listenerCount(type: any): any;
    listeners(type: any): any;
    off(type: any, listener: any): any;
    on(type: any, listener: any): any;
    once(type: any, listener: any): any;
    prependListener(type: any, listener: any): any;
    prependOnceListener(type: any, listener: any): any;
    rawListeners(type: any): any;
    removeAllListeners(type: any, ...args: any[]): any;
    removeListener(type: any, listener: any): any;
    setMaxListeners(n: any): any;
  }
}
export const PaginationFilter: any;
export const Set: any;
export const SetFilter: any;
export class SetQuery {
  all(filter: any): any;
  find(id: any): any;
  generateBooster(setId: any): any;
  where(filter: any): any;
}
export const Sets: {
  all: Function;
  find: Function;
  generateBooster: Function;
  queryFor: string;
  where: Function;
};
export namespace Subtypes {
  function all(): any;
}
export namespace Supertypes {
  function all(): any;
}
export namespace Types {
  function all(): any;
}
