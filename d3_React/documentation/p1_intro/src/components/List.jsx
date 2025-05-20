import { getImageUrl } from './Utils';
import { people } from '../data/peoples'

function List() {
  const chemists = people.filter(person => person.profession === 'chemist');

  const listItem = chemists.map(person => 
    <li key={person.id}>
      <img 
        src={getImageUrl(person)} alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' '+person.profession+' '} 
        known for {person.accomplishment}
      </p>
    </li>
  );
  return (
    <ul>{listItem}</ul>
  );
}

export default List;