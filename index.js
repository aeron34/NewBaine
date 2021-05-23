const express = require('express');
const nodemailer = require('nodemailer');

const redirectToHTTPS = require('express-http-to-https').redirectToHTTPS;

const knx = require('knex')({
  client: 'pg',
  connection: {
    host : 'queenie.db.elephantsql.com',
    user : 'knnqpjlo',
    password : 'gFwUYQT8FxjlOH-3ZDr8h8kgzS3S5wcJ',
    database : 'knnqpjlo'
  },
});

const stripe = require('stripe')('sk_test_51Il6lyCfjeYBwRLX7jqukzP0B7jMHPepwozFFlsY9KQh2eC6p3PNHSTj5fXdScskvme1fE1ttIZBITFUd2lQXp8A00IZSbhwLf');


const app = express();

app.use(express.static('Site1'));
app.use(express.static('login_page'));
app.use(express.static('courses_page'));
app.use(express.static('content'));
app.use(redirectToHTTPS());

const bodyParser = require('body-parser');

app.get('/', (req, res) => {
	res.send('done');
	//res.sendFile(__dirname + '/Site1/index.html');
});


var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'aerosemail12@gmail.com',
    pass: '$Onic1991'
  }
});


app.get('/buy', (req, res) => {
  var mailOptions = {
    from: 'aerosemail12@gmail.com',
    to: 'sniperud@gmail.com',
    subject:'Someone Bought.',
    text: 'someone copped'
  };

  transporter.sendMail(mailOptions, function(err, info) {
    console.log(`${err} ${info}`);
    res.send('done')
  })

  res.send('done')
})

const endPoint = 'whsec_vhY1EaU7SgPQ9PO7RglEwoRpvd8VwI9b';

app.post('/webhook', bodyParser.raw({type: 'application/json'}), (req, res) => {
  const payload = req.body;
	const sig = req.headers['stripe-signature'];

	let event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, endPoint);
  } catch (err) {
		console.log(err);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

	if (event.type === 'checkout.session.completed') {
		const session = event.data.object;

		knx('emails').insert({
			email: session.customer_details.email
		}).then(response => {
			res.send('good')
		}, err => {
			res.send('error')
		});
	}

})

app.get('/login', (req, res) => {
	res.sendFile(__dirname + '/login_page/index.html');
})

app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'Stubborn Attachments',
            images: ['https://i.imgur.com/EHyR2nP.png'],
          },
					unit_amount: 50
        },
        quantity: 1
      },
    ],
    mode: 'payment',
    success_url: `https://linxthegame.com/course`,
    cancel_url: `https://linxthegame.com/`,
  });

	res.json({id: session.id})
});

app.post('/login', express.urlencoded({extended: false}), express.json(),
(req, res) => {

	if(option == 'LOGIN')
	{

	}else{

	}
	res.json({sent:	req.body})

})

app.post('/check_email', express.urlencoded({extended: false}), express.json(),
(req, res) => {
	//use a knex api call here to check if the
	//dude's good, if not redirect to login;
	//res.redirect('/login')

	const info = req.body;

	knx('emails').where({
		email: info['email'],
	}).then(user => {
		console.log(user);
		if(user.length != 0)
	  {
			res.json({message:'good'})
		}else{
			res.json({message:'good'})
		}
	})

});


app.get('/course', (req, res) => {
	//use a knex api call here to check if the
	//dude's good, if not redirect to login;
	//res.redirect('/login')
	res.sendFile(__dirname + '/courses_page/index.html');
});

app.listen(process.env.PORT)
