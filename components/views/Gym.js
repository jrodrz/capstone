import html from "html-literal";
import lazyDogPic from "../../assets/img/allMine.jpg"

export default() => html`
<section id="Neighborhood">
    <form id="Neighborhood" method="POST" action="">
    <div>
        <label for="Neighborhood">Find A Gym:</label>
        <input
          type="text"
          name="gym"
          id="gym"
          placeholder="Enter Neighborhood"
        />
</div>
<input type="submit" name="submit" value="Submit Neighborhood" />
    </form>
  </section>

<a>
<img
  src = ${lazyDogPic} alt="Dog in chair with blanket and pillow">
</a>\>
`;
