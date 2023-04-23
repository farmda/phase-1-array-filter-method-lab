

// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

const findMatching = (drivers, input) => {
  return drivers.filter(driver => driver.toLowerCase() === input.toLowerCase());
}

const fuzzyMatch = (drivers, input) => {
    return drivers.filter(driver => driver.startsWith(input));
  }

  const matchName = (drivers, input) => {
    return drivers.filter(driver => driver.name === input);
  }