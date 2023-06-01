
import html from "html-literal";
import mackPic from "../../assets/img/mack.png"

export default(state) => html`
<section id="Contact">
<p>
<!-- modify this form HTML and place wherever you want your form -->
<form>
  <!-- action="https://formspree.io/f/xdovrnew"
  method="POST" -->
  <!-- > -->

  <label>
    Your email:
    <input type="email" name="email">
  </label>
  <label>
    Your message:
    <textarea name="message"></textarea>
  </label>
  <!-- your other form fields go here -->
  <button type="submit">Send</button>
</form>`
