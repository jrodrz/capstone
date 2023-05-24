import html from "html-literal";

export default() => html`
<section id="">
    <form id="dog" method="POST" action="">
    <div>
        <label for="gym">Find A Doggy Daycare:</label>
        <input
          type="text"
          name="dog"
          id="dog"
          placeholder="Enter Gym"
        />
</div>
<input type="submit" name="submit" value="Submit Gym" />
    </form>
  </section>
  `;
