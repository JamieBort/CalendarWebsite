import React from 'react';

// function APICall(params) {
//   console.log("api called", params);
//   fetch("http://api.plos.org/search?q=title:DNA", {
//     // mode: 'no-cors',
//     // headers : { 
//     //   'Content-Type': 'application/json',
//     //   'Accept': 'application/json'
//     //  }
//   })
//   .then(res => res.json())
//   .then(console.log("after res"))
//   .then(
//     (result) => {
//             this.setState({
//               isLoaded: true,
//               items: result.items
//             });
//           },
//           // Note: it's important to handle errors here
//           // instead of a catch() block so that we don't swallow
//           // exceptions from actual bugs in components.
//           (error) => {
//             this.setState({
//               isLoaded: true,
//               error
//             });
//           }
//         )

// }

export default class BasicFunction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  tempAPICall = () => {
    console.clear();
    console.log("Cleared console.");
  }

  APICall = (params) => {
    console.log("api called", params);
    // fetch("http://api.plos.org/search?q=title:DNA", {
    //   // fetch("http://www.google.com", {
    //   mode: 'no-cors',
    //   headers : { 
    //     'Content-Type': 'application/json',
    //     'Accept': 'application/json'
    //    }
    // })

    const data = { username: 'example' };

    fetch('http://api.plos.org/search?q=title:DNA', {
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        // 'Content-Type': 'application/json',
      },
      // body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data => {
        // resolve(data ? JSON.parse(data) : {})
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });



    // .then(res => res.json())
    // .then(data => console.log("data: ",data))
    // .then(res=>console.log("res.json(): ",res.json()))
    // // .then(res=>console.log(res.log))
    // // .then(console.log("after res"))
    //       .then(console.log("this.state before: ",this.state))
    // .then(
    //   (result) => {
    //           this.setState({
    //             isLoaded: true,
    //             items: result.items
    //           });
    //           console.log(result.items);
    //           console.log(state.items);
    //           console.log(state.json);
    //           console.log(state.json());
    //           console.log(state);
    //           console.log("In result");
    //         },
    //         // Note: it's important to handle errors here
    //         // instead of a catch() block so that we don't swallow
    //         // exceptions from actual bugs in components.
    //         (error) => {
    //           console.log("error: ");
    //           this.setState({
    //             isLoaded: true,
    //             error
    //           });
    //           // console.log("error: ", error)
    //         }
    //       )
    //       .catch=(err)=>{console.log(err)}

    //       // .then(console.log("After error"))
    //       // // .then(res=>console.log(res.json()))
    //       // // .then(res=>console.log(res))
    //       // .then(console.log("this.state after: ",this.state))

  }

  // ===========

  // componentDidMount() {
  //     console.log("inside componentDidMount");
  //   // fetch("https://cors-anywhere.herokuapp.com/https://facebook.github.io/react-native/movies.json", {
  //   //       mode: 'no-cors',
  //   //       headers : { 
  //   //                 'Content-Type': 'application/json',
  //   //                 'Accept': 'application/json'
  //   // }})

  // fetch("https://cors-anywhere.herokuapp.com/http://api.plos.org/search?q=title:DNA", {
  //     // mode: 'no-cors',
  //     headers : { 
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json'
  //      }

  //   })

  // // fetch("http://localhost:8085/topic")
  //     .then(res => res.json())
  //     // .then(result=>console.log(result))
  //     .then(res => console.log(res.json()))
  //     .then(console.log("after res"))
  //     .then(
  //         // console.log("I've been hit"),
  //       (result) => {
  //         console.log("I've been hit");
  //         this.setState({
  //           isLoaded: true,
  //           items: result.items
  //         });
  //       },
  //       // Note: it's important to handle errors here
  //       // instead of a catch() block so that we don't swallow
  //       // exceptions from actual bugs in components.
  //       (error) => {
  //         this.setState({
  //           isLoaded: true,
  //           error
  //         });
  //       }
  //     )
  // }

  render() {
    return <div>
      <p>Hello from inside BasicFunction. To be used to make an api call.</p>
      <p>Test: {this.props.test}</p>
      <button onClick={() => this.tempAPICall("Bam!")}>Clear console.</button>
      <button onClick={() => this.APICall("Bam!")}>APICall.</button>
    </div>;
  }




}