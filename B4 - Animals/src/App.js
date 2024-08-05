import './App.css';
import ItemList from './ItemList';

function App() {
  const items = ['Cat', 'Dog', 'Chicken', 'Cow', 'Sheep', 'Horse'];
  return (
    <div className="App">
      <h1>Animal List</h1>
      <ItemList items={items} />
    </div>
  );
}

export default App;