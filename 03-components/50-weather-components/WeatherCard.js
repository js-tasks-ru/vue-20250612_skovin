import { defineComponent } from 'vue'
import { WeatherConditionIcons } from './weather.service.ts'

export default defineComponent({
  name: 'WeatherCard',

  props: {
    weatherData: {
      type: Object,
      required: true,
    }
  },

  setup() {
    return {
        icons: WeatherConditionIcons,
    }
  },


  template: `
    <div v-if="weatherData.alert" class="weather-alert">
      <span class="weather-alert__icon">⚠ </span>
      <span class="weather-alert__description">{{weatherData.alert.sender_name}}: {{weatherData.alert.description}}.</span>
    </div>
    <div>
      <h2 class="weather-card__name">
        {{weatherData.geographic_name}}
      </h2>
      <div class="weather-card__time">
        {{weatherData.current.dt}}
      </div>
    </div>
    <div class="weather-conditions">
      <div class="weather-conditions__icon" :title="weatherData.current.weather.description"> {{icons[weatherData.current.weather.id]}} </div>
      <div class="weather-conditions__temp">{{(weatherData.current.temp-273.15).toFixed(1)}} °C</div>
    </div>
    <div class="weather-details">
      <div class="weather-details__item">
        <div class="weather-details__item-label">Давление, мм рт. ст.</div>
        <div class="weather-details__item-value">{{(weatherData.current.pressure*0.75).toFixed(0)}}</div>
      </div>
      <div class="weather-details__item">
        <div class="weather-details__item-label">Влажность, %</div>
        <div class="weather-details__item-value">{{weatherData.current.humidity}}</div>
      </div>
      <div class="weather-details__item">
        <div class="weather-details__item-label">Облачность, %</div>
        <div class="weather-details__item-value">{{weatherData.current.clouds}}</div>
      </div>
      <div class="weather-details__item">
        <div class="weather-details__item-label">Ветер, м/с</div>
        <div class="weather-details__item-value">{{weatherData.current.wind_speed}}</div>
      </div>
    </div>
  `,
})
