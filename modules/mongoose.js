const mongoose = require("mongoose");
const { KEY } = require("../config/KEY");

mongoose
	.connect(
		`mongodb+srv://${KEY}@cluster0.xafq3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
		{
			useNewUrlParser: true,
			useCreateIndex: true,
			useUnifiedTopology: true,
		}
	)
	.then(() => {
		console.log("MongoDB Connectedâ€¦ let's GO!");
	})
	.catch((err) => console.log(err));
