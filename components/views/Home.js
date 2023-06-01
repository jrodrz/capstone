import html from "html-literal"
import dogPic from "../../assets/img/Tiger_Lilly.jpg"
export default(state) => html`

<img
  src = ${dogPic} alt="Cute lonesome dog face">
<p>
  Click on Neighborhood to begin working out at the gym without the guilt or worry of leaving the your dog home alone.
</section>
<h3>
    The weather in ${state.weather.city} is
     ${state.weather.description}. Temperature is
     ${state.weather.temp}F, and it feels like
     ${state.weather.feelsLike}F.
  </h3>
`;


