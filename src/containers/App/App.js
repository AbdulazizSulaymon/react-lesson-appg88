import React from 'react'
import './App.css';
import Header from "../../components/Header/Header";
// import Counter from '../../components/Counter/Counter';
import Cities from '../Cities';

const cities = [
  {
    img: "https://cdn24.img.ria.ru/images/07e4/05/07/1571110736_0:159:3078:1890_1920x0_80_0_0_4703619035e50b76f34cd8e999857654.jpg",
    title: "Moscow city",
    text: "Moscow has many scientific and educational buildings, as well as some sports complexes built for the 1980 Summer Olympics."
  },
  {
    img: "https://www.london.gov.uk/sites/default/files/styles/gla_2_1_large/public/team-london-zendesk-launch-4044-2x1.jpg?itok=88apoStR",
    title: "London",
    text: "London is the capital and largest city of England and the United Kingdom. The city stands on the River Thames in the south-east of England."
  },
  {
    img: "https://www.gazeta.uz/media/img/2018/10/k9eiJF15384614387043_b.jpg",
    title: "Tashkent city",
    text: "Before Islamic influence started in the mid 8th century AD, Tashkent was influenced by the Sogdian and Turkic cultures."
  }
]

class App extends React.Component {
  render() {
    return <div className="App" >
      <Header></Header>
      {/* <Counter value={1} type="btn-success"></Counter> */}
      <Cities data={cities} />
    </div>
  }
}

export default App;
