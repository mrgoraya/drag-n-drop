// autobind decorator
export function autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
  const orginalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    get() {
      const boundFn = orginalMethod.bind(this);
      return boundFn;
    },
  };

  return adjDescriptor;
}
