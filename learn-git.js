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

console.log(a);
console.log(b);
