import React, {Component} from 'react';
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items:[],
      isLoaded: false,
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(json => {
      this.setState({
        isLoaded: true,
        items: json,
      })
    });
  }

  render() {
    var { isLoaded, items } = this.state;
    if (!isLoaded) {
      return <div> Loading ...</div>
}    
    else {
      return (
        
          <div className='App'  >
            <header className='App-header'>
              <h2> Contact Information</h2>
            </header>
            
              <div>
                 {items.map(item => (          
                   <div className="user-container">
                   <div className="info-item">
                   <p> Name: {item.name} </p>
                   <p> Email: {item.email} </p>
                   <p className="txt">Address: {item.address.street}, {' '} 
                   {item.address.suite},{' '}  
                    {item.address.city},  {' '}
                    {item.address.zipcode},  {' '}</p>
                    <p>GEO Location : 
                    lat: {item.address.geo.lat}{' '}
                    lng: {item.address.geo.lng}

                   </p>
                   <p> Phone: {item.phone} </p>
                   <p> Website: {item.website} </p>
                   <p> Company: {item.company.name}</p>
                   <p> CatchPhrase: {item.company.catchPhrase}</p>
                   <p> BS: {item.company.bs}  </p>

                   </div>
                   </div>                  
               ))}
              </div> 

                      
          </div>    
              
    );
        }
}
  
}
export default App;
