const input = document.querySelector("#countries");
const container = document.querySelector("#cont");
function render(counts) {
  container.innerHTML = "";
  return counts.data.objects
    .map((country) => `<li>${country.names.common}</li>`)
    .join("");
}
input.addEventListener(
  "input",
  _.debounce(() => {
    const url = `https://api.restcountries.com/countries/v5/names.common?q=${input.value}`;
    fetch(url, {
      headers: {
        Authorization: "Bearer rc_live_a0395d0d432f45a4ac5db7979448c883",
      },
    })
      .then((response) => response.json())
      .then(
        (response) =>
          (container.innerHTML =
            render(response) || "<li>No countries available</li>"),
      );
  }, 500)
);
