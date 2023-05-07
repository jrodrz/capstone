
import html from "html-literal";

export default() => html`
<section id="more">
    <form id="more" method="POST" action="">
      <h2>Please add in ...</h2>
      <div>
        <label for="location">Location:</label>
        <input
          type="text"
          name="location"
          id="location"
          placeholder="Enter Location"
          required
        />
      </div>
      <div>
        <label for="gym">Gym:</label>
        <input
          type="gym"
          name="gym"
          id="gym"
          placeholder="Enter gym"
          required
        />
      </div>
      <div>
        <label for="doggy day care">Doggy Day Care:</label>
        <input
          type="text"
          name="doggy day care"
          id="doggy day care"
          placeholder="Doggy Day Care"
          required
        />
      </div>
      </section>
  `;


