import React, {Component} from 'react';
import Modal from './components/Modal';
import Searchbar from './components/Searchbar'
import './App.css';


// const KEY = '21857755-e4f1c8434e57799dc3fa1e51f';
// const BASE_URL = 'https://pixabay.com/api';

class App extends Component {
  state = {
    hits: null,
    loading: false,
    showModal: false,
    searchQuery: 'cat',
  }

  componentDidMount() {
    this.setState({ loading: true });
    
    fetch('https://pixabay.com/api/?key=21857755-e4f1c8434e57799dc3fa1e51f&q=cat&image_type=photo&orientation=horizontal&page=1&per_page=12')
      .then(response => response.json())
      .then(({ hits }) => hits)
      .then(hits => this.setState({ hits }))
      .finally(() => this.setState({ loading: false }));
}



  toggleModal = () => {
    this.setState(({showModal}) => ({
      showModal: !showModal
    }))
  }

  onFormSubmit = ({ searchQuery }) => {
    this.setState({searchQuery});
  };

  render() {
    const { showModal, searchQuery } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.onFormSubmit}/>
        <button type="button" onClick={this.toggleModal}>Open Modal</button>
        {this.state.loading && <h1>Loading</h1>}
        {this.state.hits && (
          <div> тут будут картинки после фетч и когда запишем их в стате </div>
        )}
        {showModal &&
          (<Modal onClose={this.toggleModal}>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil voluptatem accusantium atque voluptates nisi deleniti dignissimos dolore, expedita tempora molestias molestiae eum necessitatibus, quo incidunt? Labore voluptates explicabo debitis ratione.
          Animi voluptatum, impedit officiis consectetur libero rerum tempora! 
          </p>
          <button type="button" onClick={this.toggleModal}>
            Close
          </button>
        </Modal>)}
    </div>
  );
  }
}

export default App;
