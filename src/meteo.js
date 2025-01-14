const filePath = "src/utils/conf.json";

const response = await fetch(filePath);
const data = await response.json();
const localization = data.localization;

const api_key = "c504c065c0fc5dfb4d52c0b08fea40db";
const apiLink = `https://api.openweathermap.org/data/2.5/weather?q=${localization}&units=metric&lang=fr&appid=${api_key}`;
const weatherBox = document.querySelector(".weatherBox");

const insert = (target, value) => {
	const element = weatherBox?.querySelector(target);
	if (!element) throw new Error("Element not found");
	element.textContent = value;
};

const getWeather = async () => {
	const response = await fetch(apiLink);
	const weather = await response.json();

	insert(".weatherMainInfo .temp", `${Math.round(weather.main.temp)}°C`);
	insert(".weatherMainInfo .weatherType", `${weather.weather[0].description}`);
	insert(
		".weatherMainInfo .location span",
		`${weather.name} , ${weather.sys.country}`,
	);
	insert(
		".weatherOtherInfo .feelTemp span",
		`${Math.round(weather.main.feels_like)}°C`,
	);
	insert(".weatherOtherInfo .humidity span", `${weather.main.humidity}%`);
	insert(".weatherOtherInfo .wind span", `${weather.wind.speed} km/h`);

	const image = weatherBox?.querySelector(".weatherMainInfo img");
	if (!image) throw new Error("Image Element not found");
	image.src = getWeatherIcon(weather.weather[0].id);

	const weatherDate = new Date(weather.dt * 1000).toLocaleString("fr", {
		weekday: "long",
		year: "numeric",
		month: "long",
		day: "numeric",
		hour: "numeric",
		minute: "numeric",
		hour12: false,
	});

	insert(".weatherOtherInfo .date span", weatherDate);
};

const getWeatherIcon = (weatherImage) => {
	if (weatherImage === 800) {
		return "./src/assets/clear.svg";
	}
	if (weatherImage >= 200 && weatherImage <= 232) {
		return "./src/assets/storm.svg";
	}
	if (weatherImage >= 600 && weatherImage <= 622) {
		return "./src/assets/snow.svg";
	}
	if (weatherImage >= 701 && weatherImage <= 781) {
		return "./src/assets/haze.svg";
	}
	if (weatherImage >= 801 && weatherImage <= 804) {
		return "./src/assets/cloud.svg";
	}
	if (
		(weatherImage >= 500 && weatherImage <= 531) ||
		(weatherImage >= 300 && weatherImage <= 321)
	) {
		return "./src/assets/rain.svg";
	}
	return "./src/assets/unknown.svg";
};

getWeather();
setInterval(() => getWeather(), 10 * 60 * 1000); // 10 minute
