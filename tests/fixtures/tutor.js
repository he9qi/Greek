import FactoryGuy from 'factory-guy';

FactoryGuy.define('tutor', {
  sequences: {
    name: function(num) {
      return 'User ' + num;
    }
  },
  default: {
    name: FactoryGuy.generate('name'),
    info: "Hi, I'm John. I'm from Cape Town, a beautiful city in South Africa. I've also lived in Florida, New York, London.",
    avatar_url: 'https://avatars0.githubusercontent.com/u/29342?v=3&s=40'
  }
});

export default {};
