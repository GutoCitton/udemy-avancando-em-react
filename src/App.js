import { useState } from 'react';
import './App.css';
import City from './assets/City.jpg'
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import MenageData from './components/ManageData';
import ShowUserName from './components/ShowUserName'
import CarDetails from './components/CarDetails'
import Fragment from './components/Fragment';
import Container from './components/Container';
import ExecutoFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';
import UserDetails from './components/UserDetails';

function App() {
  const name = 'Augusto';
  const [useName] = useState ('João')

  const cars = [
    {id: 1, brand: 'Ferrari', color: 'Amarelo', newCar: true, km: 0},
    {id: 2, brand: 'Kia', color: 'Branco', newCar: false, km: 2341},
    {id: 3, brand: 'Renault', color: 'Azul', newCar: false, km: 67899},
  ]

  const showMessage = () => {
    console.log('Evento do componente pai!')
  }

  const [message, setMessage] = useState('');

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  const users = [
    {id: 1, name: 'Augusto', job: 'Programador Júnior', age: 24},
    {id: 2, name: 'Bruno', job: 'Programador Sênior', age: 25},
    {id: 3, name: 'Ana', job: 'Arquiteta', age: 27},
    {id: 4, name: 'Cláudio', job: 'Estudante', age: 17},
  ]

  return (
    <div className="App">
      <h1>Avançando em React</h1>
      {/*Imagem em public*/}
      <div>
        <img src="/img1.webp" alt="campo" />
      </div>
      {/*Image em assest*/}
      <div>
        <img src={City} alt="Cidade" width={1200} />
      </div>
      <MenageData />
      <ListRender />
      <ConditionalRender />
      {/* props */}
      <ShowUserName name={useName} />
      {/* destructuring */}
      <CarDetails brand='VW' km={10000} color='Azul' newCar={false} />
      {/* reaproveitando */}
      <CarDetails brand='Ford' color='Vermelho' km={0} newCar={true} />
      <CarDetails brand='Fiat' color='Branco' km={4500} newCar={false} />
      {/* loop em array de objetos */}
      {cars.map((car)=> (
        <CarDetails
        key={car.id}
        brand={car.brand}
        color={car.brand}
        km= {car.km}
        newCar={car.newCar}
        />
      ))}
      {/* Fragment */}
      <Fragment propFragment='teste' />
      {/* children */}
      <Container myValue='testing'>
        <p>E este é o conteúdo</p>
      </Container>
      <Container myValue='testing 2'>
        <h5>E este é o conteúdo</h5>
      </Container>
      {/* executar função */}
      <ExecutoFunction myFunction={showMessage} />
      {/* state lift */}
      <Message msg={message} />
      <ChangeMessageState handleMessage={handleMessage} />
      {/* desafio */}
      {users.map((user) => (
        <UserDetails key={user.id} name={user.name} job={user.job} age={user.age} />
      ))}
    </div>
  );
}

export default App;
