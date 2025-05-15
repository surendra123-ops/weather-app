🌦️ Weather Web Application – Full Stack

A full-stack Weather Web Application that allows users to search for real-time weather information by entering a city name. It fetches live weather data from the OpenWeatherMap API and displays temperature, humidity, wind speed, and weather description in a responsive and visually appealing UI.

✅ Features Implemented
- 🔍 Search weather by city name
- 🌡️ Display temperature, humidity, wind speed, and weather description
- 🔄 Real-time weather data using OpenWeatherMap API
- 📱 Fully responsive design using Tailwind CSS
- ⚡ Fast and dynamic frontend built with React.js
- 🌐 RESTful backend API using Node.js and Express.js

🔌 API Used
OpenWeatherMap API  
Used to fetch live weather data based on the city input.  
Website: https://openweathermap.org/api

🛠️ Tech Stack

📦 Frontend:
- React.js – React-based framework with server-side rendering (Reactjs)
- Tailwind CSS – Utility-first CSS framework for rapid UI development
- React Query – For efficient data fetching and caching
- Formik – For form state management and validation

🖥️ Backend:
- Node.js – JavaScript runtime environment
- Express.js – Minimalist web framework for building APIs

🚀 Deployment
The app is deployed on Render:

- 🔗 Frontend (React js): https://weather-app-1-aiau.onrender.com/
- 🔗 Backend (Express.js API): https://weather-app-klud.onrender.com

💻 Instructions to Run Locally

1. Clone the Repository
git clone https://github.com/surendra123-ops/weather-app.git
cd weather-app

2. Set Up the Backend
cd server
npm install

Create a .env file in the server/ directory with the following:
PORT=5000
WEATHER_API_KEY=your_openweathermap_api_key

Start the backend server:
npm start



3. Set Up the Frontend
cd ../client
npm install

Create a .env.local file in the client/ directory with:


Start the frontend server:
npm run dev


📁 Project Structure

weather-app/
├── client/          # React.js frontend
│   ├── pages/

│   └── ...
├── server/          # Node.js backend
│   ├── routes/
│   ├── controllers/
│   ├── index.js
│   └── ...
└── README.md

The frontend and backend run independently. The frontend sends HTTP requests to the backend, which in turn fetches data from the OpenWeatherMap API and returns it.

👤 Author
Suendra
