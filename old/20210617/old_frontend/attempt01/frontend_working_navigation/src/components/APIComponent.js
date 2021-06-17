import React from 'react';



export default class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
    }
  
    componentDidMount() {
        console.log("inside componentDidMount");
      fetch("https://cors-anywhere.herokuapp.com/https://facebook.github.io/react-native/movies.json", {
            mode: 'no-cors',
            headers : { 
                      'Content-Type': 'application/json',
                      'Accept': 'application/json'
      }})

    // fetch("https://cors-anywhere.herokuapp.com/http://api.plos.org/search?q=title:DNA", {
    //     mode: 'no-cors',
    //     // headers : { 
    //     //   'Content-Type': 'application/json',
    //     //   'Accept': 'application/json'
    //     //  }
  
    //   })

    // fetch("http://localhost:8085/topic")
        .then(res => res.json())
        // .then(result=>console.log(result))
        .then(res => console.log(res.json()))
        .then(console.log("after res"))
        .then(
            // console.log("I've been hit"),
          (result) => {
            console.log("I've been hit");
            this.setState({
              isLoaded: true,
              items: result.items
            });
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
  
    render() {
      const { error, isLoaded, items } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <ul>
            {items.map(item => (
              <li key={item.id}>
                {item.name} {item.price}
              </li>
            ))}
          </ul>
        );
      }
    }
  }