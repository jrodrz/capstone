import html from "html-literal"
import mapPic from "../../assets/img/Screenshot2023-05-29-122234.jpg"
export default(state) => html`

<img
  src = ${mapPic} alt="Map of St. Louis Neighboods">

    <form id="neighborhood" method="POST" action="">
      <h2>Pick your neighborhood to find a gym.</h2>
      <div>
        <label for="neighborhood">neighborhood:</label>
        <select id="neighborhood" name="neighborhood" onchange="window.location.href=this.value;">
          <option value="">Select a Neighborhood to see local gyms.</option>
          <option value="./Gym">Central West End</option>
      </div>
    `;
