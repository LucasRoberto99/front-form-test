document.addEventListener("DOMContentLoaded", () => {
  console.log("dom loaded");

  document.querySelector("#buttontest").addEventListener("click", () => {
    console.log("un clic a été entendu");

    // document.querySelector("#divtest").classList.remove("red");

    document.querySelector("#divtest").classList.toggle("hidden");
  });

  document.querySelector("form").addEventListener("submit", async (event) => {
    // empecher le refresh de la page au subit
    event.preventDefault();

    console.log("submit");

    const firstname = document.querySelector("#firstname").value;
    const lastname = document.querySelector("#lastname").value;
    const email = document.querySelector("#email").value;

    const { data } = await axios.post("http://localhost:3002/form", {
      firstname,
      lastname,
      email,
    });

    console.log("reponse ====>", data);

    // console.log(firstname);
  });
});
