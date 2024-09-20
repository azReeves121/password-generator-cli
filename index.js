#!/usr/bin/env node

const { program } = require("commander");

// Function to generate a password
function generatePassword(
  length,
  includeNumbers,
  includeUppercase,
  includeSymbols
) {
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const symbols = "!@#$%^&*()";

  let characters = lowercase;
  if (includeNumbers) characters += numbers;
  if (includeUppercase) characters += uppercase;
  if (includeSymbols) characters += symbols;

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
}

// CLI options
program
  .option("-l, --length <number>", "length of the password", "8") // default length is 8
  .option("-n, --numbers", "include numbers")
  .option("-u, --uppercase", "include uppercase letters")
  .option("-s, --symbols", "include symbols");

program.parse(process.argv);

const options = program.opts();
const length = parseInt(options.length);

// Generate and print the password
const password = generatePassword(
  length,
  options.numbers,
  options.uppercase,
  options.symbols
);
console.log(`Generated password: ${password}`);
