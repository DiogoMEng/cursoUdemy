import List from './components/List';
import { Card } from './components/Card';
import { Recipe, TeaSet } from './components/Recipe';
 
export default function Profile(){
  return (
    <Card>
      <List
        size = {100}
        person = {{
          name: 'Katsuko Saruhashi',
          imageId: 'YfeOqp2'
        }}
      />
      <div>
        <h1>Spiced chai Recipe</h1>
        <h2>For two</h2>
        <Recipe 
          drinkes={2}
        />
        <h2>For a gathering</h2>
        <Recipe 
          drinkes={4}
        />
      </div>
      <TeaSet />
    </Card>
  );
}
