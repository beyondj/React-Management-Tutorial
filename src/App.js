import React, {Component} from 'react';
import './App.css';
import { render } from '@testing-library/react';
import Customer from './components/Customer';

const customers =[{
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name': '김지영',
  'birthday': '910130',
  'gender': '남자',
  'job':'대학생'
},
{
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name': '김지영2',
  'birthday': '9101302',
  'gender': '남자2',
  'job':'대학생2'
}]
class App extends Component {
  render(){
    return(
      <div>
        {
          customers.map(c=>{
            return(
              <Customer 
                key={c.id}
                id={c.id}
                image={c.image} 
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />
            );
          })
        }
      </div>
    ) 
  }
}
  


export default App;
