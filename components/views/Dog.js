import html from "html-literal";

export default state => html`
<table id="dog">
<tr>
  <th>dog</th>
</tr>
${state.pizzas
  .map(pizza => {
    return `<tr><td>${dog.dog}</td></tr>`;
  })
  .join("")}

</table>`
