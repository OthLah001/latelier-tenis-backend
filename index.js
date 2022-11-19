const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3333;

app.use(cors());
app.use(bodyParser.json());

app.listen((process.env.PORT || PORT), (error) =>{
	if(!error)
		console.log(`Server is Running: http://localhost:${PORT}`);
	else
		console.log("Error occurred: ", error);
	}
);