const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const playersRouter = require("./routers/players.router");
const statisticsRouter = require("./routers/statistics.router");

const app = express();
const PORT = 3333;

app.use(cors());
app.use(bodyParser.json());

app.use(playersRouter);
app.use(statisticsRouter);

app.listen((process.env.PORT || PORT), (error) =>{
	if(!error)
		console.log(`Server is Running: http://localhost:${PORT}`);
	else
		console.log("Error occurred: ", error);
	}
);
