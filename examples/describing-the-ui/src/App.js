import { people } from './data.js';
import { getImageUrl } from './utils.js';
import './App.css';

export default function List() {
  const listItems = people.map((person) => (
    <li key={person.id} className='list-user'>
      <img src={getImageUrl(person)} alt={person.name} className='img-user' />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  ));

  return (
    <article>
      <h1>Scientists</h1>
      <ul>{listItems}</ul>
    </article>
  );
}
