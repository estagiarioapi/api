export function Logger() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
      console.log(
        `[${new Date().toISOString()}] - ${target.constructor.name} - ${propertyKey} - ${args.length ? JSON.stringify(args) : ''}`,
      );
      return originalMethod.apply(this, args);
    };

    return descriptor;
  };
}
