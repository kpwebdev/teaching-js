console.clear();
// class is myth in JS
// classes are syntactic sugar in JS
// the actual thing that exists is prototypical inheritance

// ============= factory functions (one way) starts =============
{
  console.log("============= factory functions (one way) starts =============");
  function generateUser(name, age) {
    const newUser = { name, age };

    newUser.greetNormally = function () {
      console.log(`${this.name}: says Hello.`);
    };

    newUser.greetPerson = function (personName) {
      console.log(`${this.name}: How are you, ${personName}`);
    };

    return newUser;
  }

  const admin = generateUser("KP", 24);
  const client = generateUser("Mohit", 26);

  admin.greetNormally();
  admin.greetPerson("Sai Prasad");

  client.greetNormally();
  client.greetPerson("KP");

  console.log("admin:", admin);
  console.log("client:", client);

  console.log(
    "admin.greetNormally === client.greetNormally",
    admin.greetNormally === client.greetNormally,
  );
  console.log(
    "admin.greetPerson === client.greetPerson",
    admin.greetPerson === client.greetPerson,
  );

  console.log("============= factory functions (one way) ends =============");
}
// ============= factory functions (one way) ends =============

// ============= factory functions (second way) starts =============
{
  console.log(
    "============= factory functions (second way) starts =============",
  );
  function generateUser(name, age) {
    const newUser = { name, age };

    newUser.__proto__.greetNormally = function () {
      console.log(`${this.name}: says Hello.`);
    };

    newUser.__proto__.greetPerson = function (personName) {
      console.log(`${this.name}: How are you, ${personName}`);
    };

    return newUser;
  }

  const admin = generateUser("KP", 24);
  const client = generateUser("Mohit", 26);

  admin.greetNormally();
  admin.greetPerson("Sai Prasad");

  client.greetNormally();
  client.greetPerson("KP");

  console.log("admin:", admin);
  console.log("client:", client);

  console.log(
    "admin.greetNormally === client.greetNormally",
    admin.greetNormally === client.greetNormally,
  );
  console.log(
    "admin.greetPerson === client.greetPerson",
    admin.greetPerson === client.greetPerson,
  );
  console.log(
    "============= factory functions (second way) ends =============",
  );
}
// ============= factory functions (second way) ends =============
