import html from "html-literal"
import dogPic from "../../assets/img/20220816_171022.jpg"
export default(state) => html`

<img
  src = ${dogPic} alt="Cute lonesome dog face">
<p>For those family members who cannot enjoy the gym, we provide easy, convenient, reliable alternatives.
</p>
<p>Enabling those who can, to enjoy their work out without guilt or worry.
</section>
<h3>
    The weather in ${state.weather.city} is
     ${state.weather.description}. Temperature is
     ${state.weather.temp}F, and it feels like
     ${state.weather.feelsLike}F.
  </h3>
`


