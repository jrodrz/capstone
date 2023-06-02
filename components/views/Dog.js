import html from "html-literal";


export default state => html`
<p>
  <h4> Day care places for my</h4>
</p>

<table id="dogs">
<tr>
  <th>Dog</th>
 </tr>
${state.dogs
  .get(dog = {
    return:dog
  })
  .join("")}

</table>
`;
