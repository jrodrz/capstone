import html from "html-literal";


export default state => html`
<p>
  <h4> Day care places for my</h4>
</p>

<table id="doggy day cares">
<tr>
  <th>Dog</th>
 </tr>
${state.dog
  .map(dog => {
    return `<tr><td>${dog.dog}</td></tr>`;
  })
  .join("")}

</table>
`;
