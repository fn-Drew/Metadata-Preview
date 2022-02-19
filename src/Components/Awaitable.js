const Awaitable = async (duration) => {
  return new Promise(async (resolve) => {
    // @ts-ignore
    // await setTimeout[Object.getOwnPropertySymbols(setTimeout)[0]](duration);
    // resolve(true);
    setTimeout(() => { resolve() }, duration)
  });
};

export { Awaitable };

export default Awaitable;