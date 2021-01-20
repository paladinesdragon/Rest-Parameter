const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0);
}

sum(5,10);