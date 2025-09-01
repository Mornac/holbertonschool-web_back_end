#!/usr/bin/env node

process.stdout.write("Welcome to Holberton School, what is your name?\n");
process.stdin.on('readable', () => {
  const answer = process.stdin.read();
  if (answer) {
    process.stdout.write(`Your name is: ${answer}`);
  }
});
process.stdin.on('end', () => {
  console.log("This important software is now closing");
});
