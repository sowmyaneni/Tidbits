var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/mvp');
mongoose.connect('mongodb://localhost/tidbit', { useNewUrlParser: true });

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var topicSchema = mongoose.Schema({
  id: Number, 
  description: String
});

var Convstarts = mongoose.model('Convstarts', topicSchema);
var Jokes = mongoose.model('Jokes', topicSchema);
var Quotes = mongoose.model('Quotes', topicSchema);
var Pickups = mongoose.model('Pickups', topicSchema);

var convStartsArr = ['Do you have any siblings?', 'what are you most passionate about?', 'Do you play any sports?', 'What\'s your favorite TV show?', 'What is your favorite book?', 'What was the highlight of your day today?', 'What is your favorite board game?', 'If money was not a concern, what would you be doing?', 'What type of music do you like?', 'What makes you laugh out loud?'];
var jokesArr = ['Why do we tell actors to "break a leg?" Because every play has a cast.', 'Helvetica and Times New Roman walk into a bar. "Get out of here!" shouts the bartender."We don\'t serve your type!"', 'Yesterday I saw a guy spill all his Scrabble letters on the road. I asked him, "What\'s the word on the street?"', 'Hear about the new restaurant called Karma? There\'s no menu: You get what you deserve', 'Did you hear about the actor who fell through the floorboards? He was just going through a stage', 'Did you hear about the claustrophobic astronaut? He just needed a little space.', 'Why don\'t scientists trust atoms? Because they make up everything.', 'Why did the chicken go to the seance? To get to the other side.', 'Where are average things manufactured? The satisfactory.', 'How do you drown a hipster? Throw him in the mainstream.' ];
var quotesArr = ['Don\'t cry because it\'s over, smile because it happened. ~Dr. Seuss', 'A room without books is like a body without a soul. ~ Marcus Tullius Cicero', 'Keep your face always toward the sunshine - and shadows will fall behind you. ~Walt Whitman', 'Not all those who wander are lost. ~ J.R.R. Tolkien', 'Whoever is happy will make others happy too. ~Anne Frank', 'The secret of getting ahead is getting started. ~Mark Twain', 'In three words I can sum up everything I\'ve learned about life: it goes on. ~ Robert Frost', 'Lots of people want to ride with you in the limo, but what you want is someone who will take the bus with you when the limo breaks down. ~Oprah Winfrey', 'Set the controls for the heart of the sun. ~Pink Floyd', 'Then as it was, then again it will be; though the course may change sometimes, rivers always reach the sea. ~Led Zeppelin'];
var pickupsArr = ['Are you a magician? Because whenever I look at you, everyone else disappears!', 'If you were a vegetable, you\'d be a cute-cumber', 'Do you live in a corn field, cause I\'m stalking you.', 'Are you a parking ticket? Cause you\'ve got fine written all over you.', 'I seem to have lost my phone number. Can I have yours?', 'Have you been to the doctor lately? Cause I think you\'re lacking some Vitamin Me.', 'You\'re so beautiful that you made me forget my pickup line.', 'Are you a banana? Cause I find you a-peeling.', 'My love for you is like diarrhea, I just can\'t hold it in.', 'Can I borrow a kiss? I promise I\'ll give it back.'];

convStartsArr.forEach((starter, i) => {
  let newStarter = new Convstarts({description: starter, id: i});
  newStarter.save((err, data) => {
    if (err) {
      console.error(err);
    }
  });
});

jokesArr.forEach((joke, i) => {
  let newJoke = new Jokes({description: joke, id:i });
  newJoke.save((err, data) => {
    if (err) {
      console.error(err);
    }
  });
});

quotesArr.forEach((quote, i) => {
  let newQuote = new Quotes({description: quote, id: i});
  newQuote.save((err, data) => {
    if (err) {
      console.error(err);
    }
  });
});

pickupsArr.forEach((pickup, i) => {
  let newPickup = new Pickups({description: pickup, id: i});
  newPickup.save((err, data) => {
    if (err) {
      console.error(err);
    }
  });
});

var selectRandomStarter = function(callback) {
  randomId = Math.floor(Math.random() * 10);
  Convstarts.find({id: randomId}, function(err, items) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, items[0].description);
    }
  });
};

var selectRandomJoke = function(callback) {
  randomId = Math.floor(Math.random() * 10);
  Jokes.find({id: randomId}, function(err, items) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, items[0].description);
    }
  });
};

var selectRandomQuote = function(callback) {
  randomId = Math.floor(Math.random() * 10);
  Quotes.find({id: randomId}, function(err, items) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, items[0].description);
    }
  });
};

var selectRandomPickup = function(callback) {
  randomId = Math.floor(Math.random() * 10);
  Pickups.find({id: randomId}, function(err, items) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, items[0].description);
    }
  });
};

module.exports.selectRandomStarter = selectRandomStarter;
module.exports.selectRandomJoke = selectRandomJoke;
module.exports.selectRandomQuote = selectRandomQuote;
module.exports.selectRandomPickup = selectRandomPickup;