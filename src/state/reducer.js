import {
  INPUT_CHANGE,
  NAME_CLICK,
  BACK_CLICK
} from './types';


class User {
    constructor(
      name,
      city,
      industry,
      hobbies,
      email
    ) {
      this.name = name;
      this.city = city;
      this.industry = industry;
      this.hobbies = hobbies;
      this.email = email;
      this.id = genId(email, industry, city);
    }
  }
  
  const genId = (str1, str2, str3) => {
    const megaStr = '' + str1 + str2 + str3;
    const chars = [];
    for(let i = 0; i < megaStr.length; i++) {
      const randomVal = Math.floor(Math.random() * 3 * megaStr.charCodeAt(i));
      if (randomVal % 3 === 0) {
        chars.push(i);
      } else {
        chars.push(String.fromCharCode(randomVal));
      } if(i === str1.length || i === str2.length) chars.push('-')
    }
    return chars.join('');
  }
  
  const initialState = {
    userPage: undefined,
    users: [
      new User('Bobby', 'Los Angeles', 'Software Development', 'Many many awesome fun hobbies', 'email@email.com'),
      new User('Henry', 'Seattle', 'Software Production', 'TV shows', 'root@email.com'),
      new User('Sofie', 'Boulder', 'Software Engineer', 'Gardening', 'souped up@email.com'),
      new User('Miranda', 'Detroit', 'Mechanic', 'Video Games', 'trippers@email.com'),
      new User('Jerome', 'NYC', 'Physicist', 'Reading', 'email@mailamail.com'),
      new User('Millie', 'Hawkins, Indiana', 'ESP', 'Blowing up things from the upside down', 'hoppin@email.com'),
      new User('Train', 'Oaklahoma City', 'Real Engineer', 'choo choo', 'chooc.choo@email.com'),
    ],
    input: ''  }
  
export default function reducer(state=initialState, action) { // state defaults to the previously defined initialState variable if it's undefined
    switch(action.type) {
        case INPUT_CHANGE:
           return {... state, input: action.payload}
        case NAME_CLICK:
            return {... state, userPage: action.payload}
        case BACK_CLICK:
            return {... state, userPage: undefined, input: '' }
        default:
            return state;
    }
}