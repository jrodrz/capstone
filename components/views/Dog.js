import html from "html-literal";
import manyDogsPic from "../../assets/img/nosesNtails.jpg"

export default() => html`
<section id="dog">
    <form id="dog" method="POST" action="">
      <h2>Find a Doggy Daycare</h2>
      <div>
        <label for="dog">Dogs:</label>
        <select id="dog" name="dog">
          <option value="">Select a doggy Daycare</option>
          <option value="Wolfgang">Wolfgang"s Pet Stop</option>
          <option value="watering">The Watering Bowl</option>
          <option value="Delmar">Delmar doggiedesign</option>
         </select>
      </div>

  <a>
  <img
  src = ${manyDogsPic} alt="Three Pit Bulls Playing in a Linving Room">
</a>
`;
