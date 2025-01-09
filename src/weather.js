const filePath = "src/utils/config.json";

try {
  const response = await fetch(filePath);

  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }

  const data = await response.json();
} catch (error) {
  console.error(error.message);
}
const city = data.city;
const apiLink = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid={API key}`;
