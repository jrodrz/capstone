import html from "html-literal"
import mapPic from "../../assets/img/Screenshot2023-05-29-122234.jpg"
export default(state) => html`

<img
  src = ${mapPic} alt="Map of St. Louis Neighboods">

    <form id="nieghborhood" method="POST" action="">
      <h2>Pick your neighborhood</h2>
      <div>
        <label for="neighborhood">neighborhood:</label>
        <select id="neighborhood" name="neighborhood">
          <option value="">Select a Neighborhood</option>
          <option value="cwe">Central West End</option>
      </div>
    `;
