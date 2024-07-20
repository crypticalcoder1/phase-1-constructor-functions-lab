// Define the Scooter constructor function
function Scooter(year, color, model) {
    this.year = year;
    this.color = color;
    this.model = model;
}

// Define the Driver constructor function
function Driver(name, age, experience) {
    this.name = name;
    this.age = age;
    this.experience = experience;
}

// Define the PickupLocation constructor function
function PickupLocation(address, city) {
    this.address = address;
    this.city = city;
}

// Example usage and testing of the constructor functions
const myScooter = new Scooter(2022, 'red', 'Model X');
const myDriver = new Driver('Alice', 30, '5 years');
const myPickupLocation = new PickupLocation('123 Main St', 'New York');

// Log properties of each instance
console.log("Scooter:", myScooter);
console.log("Driver:", myDriver);
console.log("Pickup Location:", myPickupLocation);

// Export the constructor functions if using in a module (optional)
// module.exports = { Scooter, Driver, PickupLocation };
