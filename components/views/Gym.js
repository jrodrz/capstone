import html from "html-literal";

export default(state) => html`

    <form id="gym" method="POST" action="">
      <h2>Find a Gym with dog care nearby.</h2>
      <div>
        <label for="gym">Gym:</label>
        <select id="gym" name="gym" onchange="window.location.href=this.value;">
          <option value="">Select a Gym to find a doggy daycare nearby.</option>
          <option value="./dog">Pure Barre</option>
          <option value="./dog">Orange Theory Fitness</option>
          <option value="./dog">Crossfit Happy Streets</option>
          <option value="./dog">Denay's Fitness</option>
        </select>
      </div>
`;
