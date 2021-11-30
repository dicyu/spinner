const loading = "|/-\\/-|\n"
let delay = 100;
let msIncrease = 200;

for (let char of loading) {
  setTimeout(() => {
    process.stdout.write(`\r${char}`);
  }, delay)
  delay += msIncrease;
};