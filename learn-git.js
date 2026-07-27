const a = {
  name: "Thai",
  address: {
    city: "Ha Noi",
  },
};
const b = {
  ...a,

  address: { ...a.address },
};

b.address.city = "Da Nang";

console.log("2");

console.log("4");

console.log("reset --soft");

console.log("revert");
