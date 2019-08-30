import React from 'react'
import axios from 'axios'

class Register extends React.Component {

        // initialize our state
        state = {
          data: [],
          id: 0,
          name: '',
          email: '',
          intervalIsSet: false,
          idToDelete: null,
          idToUpdate: null,
          objectToUpdate: null,
        };
      
        // when component mounts, first thing it does is fetch all existing data in our db
        // then we incorporate a polling logic so that we can easily see if our db has
        // changed and implement those changes into our UI
        componentDidMount() {
          this.getDataFromDb();
          if (!this.state.intervalIsSet) {
            let interval = setInterval(this.getDataFromDb, 1000);
            this.setState({ intervalIsSet: interval });
          }
        }
      
        // never let a process live forever
        // always kill a process everytime we are done using it
        componentWillUnmount() {
          if (this.state.intervalIsSet) {
            clearInterval(this.state.intervalIsSet);
            this.setState({ intervalIsSet: null });
          }
        }
      
        // just a note, here, in the front end, we use the id key of our data object
        // in order to identify which we want to Update or delete.
        // for our back end, we use the object id assigned by MongoDB to modify
        // data base entries
      
        // our first get method that uses our backend api to
        // fetch data from our data base
        getDataFromDb = () => {
          fetch('http://localhost:3000/api/users.js')
          // fetch('/api/getData')
            .then((data) => data.json())
            .then((res) => this.setState({ data: res.data }));
        };
      
        // our put method that uses our backend api
        // to create new query into our data base
        putDataToDB = () => {
          let currentIds = this.state.data.map((data) => data.id);
          let idToBeAdded = 0;
          while (currentIds.includes(idToBeAdded)) {
            ++idToBeAdded;
          }
      
      
          axios.post('http://localhost:3000/api/putData',{
            name:this.state.name,
            email:this.state.email
          
          }).then((res)=>{
            //on success
            }).catch((error)=>{
            //on error
          });
      
        }
      
        
      
      
        // render page
      
        render() {
          const { data } = this.state;
          return (
            <div>
             
                {data.length <= 0
                  ? 'NO DB ENTRIES YET'
                  : data.map((dat) => (
                      console.log(dat.id, dat.name, dat.email )
                    ))}
                
              
      
      
              <div className="container-account">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      <h1 className="text-center">Register</h1>
                    </div>
                  </div>
                </div>
      
                <div className="container">
                  <div className="row">
                    <div className="col-md-10 m-auto">
                      <div className="form-group">
                        <form className="form-container" action="/register" method="POST">
                          <label for="name">Name</label>
                          
                          <input
                          type="text"
                          name="name"
                          className="form-control animated fadeIn"
                          onChange={(e) => this.setState({ name: e.target.value })}
                  
                          />
      
                          <label for="email">Email</label>
      
                          <input
                          type="email"
                          name="email"
                          className="form-control animated fadeIn"
                          onChange={(e) => this.setState({ email: e.target.value })}
                  
                          />
                          
      
                          <label for="password">Password</label>
                          <input
                            type="password"
                            id="password"
                            name="password"
                            className="form-control animated fadeIn"
                          />
                        </form>
      
                        <div className="modal-margins">
                          <div className="row">
                            <div className="col-md-8 m-auto">
      
                            <button
                            type="submit"
                            className="btn btn-primary btn-block"
                            onClick={() => this.putDataToDB(this.state)}>
                            Register
                            </button>
      
                            </div>
                          </div>
                        </div>
      
                        <p className="lead mt-4">
                          Have An Account?{" "}
                          <a className="register" href="/users/login">
                            Login
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <style jsx>{`

              `}</style>

            </div>
          );
        }
      }
      

export default Register