import React from 'react';
import { Container } from 'semantic-ui-react';
import  BookCard from '../containers/BookCard';
import  Filter from '../containers/Filter';
import  Menu from '../containers/Menu';
import { Card } from 'semantic-ui-react';
import axios from 'axios/index';

class App extends React.Component{
  componentWillMount() {
    console.log(`Это пропсы `, this.props)
    const { setBookss } = this.props;
    axios.get('/db.json').then(({data}) => {
      setBookss(data);
    })
  }

  render() {
    console.log(`Это пропсы в рендере `, this.props)
    console.log(`Это state `, this.state)

    const {books, isReady} = this.props;
    return (
      <Container>
        <Menu/>
        <Filter/>
        <Card.Group itemsPerRow={4}>
          {
            !isReady ? 'Загрузка...'
              : books.map((book, i) => (
                <BookCard key={i} {...book}/>
              ))
          }
        </Card.Group>
      </Container>
    );
  }
}

export default App;
