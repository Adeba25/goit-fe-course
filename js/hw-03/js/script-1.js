const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true
};

user.mood = "happy";
user.hobby = "javascript";
user.premium = false;


for (let i = 0; i < Object.keys(user).length; i++) {
  console.log(`${Object.keys(user)[i]} : ${Object.values(user)[i]}`);
}
