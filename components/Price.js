import React, { Component } from 'react';
import axios from 'axios';

const URL = 'https://api.coindesk.com/v1/bpi/currentprice.json';

class Price extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inDollars: '',
      inEuro: '',
      inPounds: '',
    };
  }

  componentDidMount() {
    axios.get(URL).then(response => response.data)
      .then((data) => {
        this.setState({
          inDollars: data.bpi.USD.rate,
          inEuro: data.bpi.EUR.rate,
          inPounds: data.bpi.GBP.rate,
        });
      });
  }

  render() {
    const { inDollars, inEuro, inPounds } = this.state;
    return (
      
       <div>
          <div className="container">
          <div className="row">
          <div className="col-md-4 container-separate">
          <p class="light"><span className="lightThin">BTC/USD:</span><br></br> {inDollars}</p>
          </div>
          <div className="col-md-4 container-separate">
          <p class="light"><span className="lightThin">BTC/EUR:</span><br></br> {inEuro}</p>
          </div>
          <div className="col-md-4">
          <p class="light"><span className="lightThin">BTC/GBP:</span><br></br> {inPounds}</p>
          </div>
          </div>
          </div>
       </div>
        
    );
  }
}

export default Price;