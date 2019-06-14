import React from 'react';
import axios from 'axios';

//import requiresAuth from '../auth/requiresAuth';

class JokeList extends React.Component {
  state = {
    jokes: [],
  };

  render() {
    return (
      <>
        <h2>Jokes</h2>

        <ul>
          {this.state.jokes.map(j => (
            <li key={j.id}>{j.joke}</li>
          ))}
        </ul>
      </>
    );
  }

  componentDidMount() {
    const endpoint = 'http://localhost:3300/api/jokes';

    axios
      .get(endpoint)
      .then(res => {
        console.log('jokes', res.data);
        this.setState(() => ({ jokes: res.data }));
      })
      .catch(({ response }) => {
        console.error('user error', response);
      });
  }
}

export default JokeList;
