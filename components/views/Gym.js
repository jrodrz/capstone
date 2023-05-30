import html from "html-literal";
import door from "../../assets/img/doggy_door.jpg"

export default(state) => html`
<img
  src = ${door} alt="Dog begging to come in">
    <form id="gym" method="POST" action="">
      <h2>Find a Gym</h2>
      <div>
        <label for="gym">Gym:</label>
        <select id="gym" name="gym">
          <option value="">Select a Gym</option>
          <option value="barre">Pure Barre</option>
          <option value="orange">Orange Theory Fitness</option>
          <option value="crossfit">Crossfit Happy Streets</option>
          <option value="denay">Denay's Fitness</option>
        </select>
      </div>
`;
