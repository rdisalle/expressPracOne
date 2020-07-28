const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'));

app.get('/sum', (req, res) => {
    //1. get values from the request
    const valueA = parseInt(req.query.A);
    const valueB = parseInt(req.query.B);

 //2. validate the values
 if(!valueA) {
    //3. A was not provided
    return res.status(400).send('Please provide an A value');
  }

  if(!valueB) {
    //3. B was not provided
    return res.status(400).send('Please provide a B value');
  }

  //4. and 5. both A and B are valid so do the processing.
  const greeting = `The sum of ${valueA} and ${valueB} is ${valueA + valueB}`;

  //6. send the response 
  res.send(greeting);
});

app.listen(8000, () => {
    console.log('Express server is listening on port 8000!');
  });  