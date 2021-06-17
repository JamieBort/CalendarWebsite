import React from 'react';

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
    
    fetch('http://api.plos.org/search?q=title:DNA', {
        // mode: 'no-cors',
          headers: {
            'Access-Control-Allow-Origin': '*',
            // 'Access-Control-Allow-Origin': 'http://localhost:3000/',
            // 'Access-Control-Allow-Origin': 'http://api.plos.org/search?q=title:DNA',
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            // 'Content-Type': 'application/json',
          },
  }
  )
  .then(response => {
    console.log("response: ", response);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    // console.log("response.blob(): ", response.blob());
    return response.blob();
  })
  .then(myBlob => {
    myImage.src = URL.createObjectURL(myBlob);
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
    // console.log(error.state)
  });
    


        // fetch('http://api.plos.org/search?q=title:DNA', {
    //   mode: 'no-cors',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Accept': 'application/json',
    //     // 'Content-Type': 'application/json',
    //   },
    //   // body: JSON.stringify(data),
    // })




  }

  render() {
    return <div>
      <p>Hello from inside BasicFunction. To be used to make an api call.</p>
      <p>Test: {this.props.test}</p>
      <button onClick={() => this.tempAPICall("Bam!")}>Clear console.</button>
      <button onClick={() => this.APICall("Bam!")}>APICall.</button>
    </div>;
  }




}