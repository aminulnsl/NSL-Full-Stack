// import logo from './logo.svg';
import './App.css';

function App() {
  const pets = [
    { 
      name: 'Rolly',
      type: 'cat',
      description: 'Rolly is funny and love to be around people.',
      skills: ['fetch', 'play dead', 'roll over'],
      image: 'https://images.pexels.com/photos/177809/pexels-photo-177809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

    },
    { 
      name: 'Polly',
      type: 'cat',
      description: 'Polly is funny and love to be around people.',
      skills: ['play dead', 'meaw', 'purr'],
      image: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

    },
    { 
      name: 'Olly',
      type: 'cat',
      description: 'Olly is funny and love to be around people.',
      skills: ['play dead', 'meaw', 'purr'],
      image: 'https://images.pexels.com/photos/177809/pexels-photo-177809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

    }
  ];
  return (
    <div className="App">
      <h1>My Pets</h1>
      <ul className="container">
        {
          pets.map((pet, index) => (
            <li key={index}>
              <h2>{pet.name}</h2>
              <p>{pet.description}</p>
              <img src={pet.image} 
                  alt={pet.name}
                  width="200px"
                  height="200px"/>
              <ul className="skills">
                {
                  pet.skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))
                }
              </ul>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default App;
