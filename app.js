let btn = document.querySelector("button");
let para = document.querySelector("p");

btn.addEventListener("click", async function () {
  try {
    left = await getData();
    para.innerText = left;
  } catch (err) {
    para.innerText = "An error has occur :(";
  }
});

async function getData() {
  let res = await axios.get('https://catfact.ninja/fact');
  console.log(res.data.fact);
  return res.data.fact;
}
