// console.log("Dad Jokes Starter");
// html select elements
const result = document.querySelector(".result");
const btn = document.querySelector(".btn");

const url = "https://icanhazdadjoke.com/";

async function getJoke(url) {
  try {
    const response = await fetch(url, {
      headers: {
        Accept: "application/json",
        "User-Agent": "learning app",
      },
    });
    if (!response.ok) {
      throw new Error(`Error occured: ${response.status}`);
    }
    const data = await response.json();
    return data.joke;
  } catch (error) {
    return error;
  }
}

btn.addEventListener("click", async () => {
  result.textContent = "Loading a joke...";
  result.textContent = await getJoke(url);
});

window.addEventListener("DOMContentLoaded", async () => {
  result.textContent = "Loading a joke....";
  result.textContent = await getJoke(url);
});
