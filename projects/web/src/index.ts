// importing classes
import { User } from './Models/User';

// ---------------------------------------

const user = new User({ id: 1, name: 'newer name', age: 0 });

user.on('save', () => {
  console.log(user);
});

user.save();