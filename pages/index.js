import Header from "../components/Header"
import Register from "../components/Register"
import NavBar from "../components/NavBar"
import Price from "../components/Price"

function App() {
  return (
    <div>
      <Header>
      </Header>

      <NavBar>
      </NavBar>

      <div className="centered">
        <img src="/static/img/card.svg" alt="swisscard" className="img-card" />
      </div>

      <div className="centered">
        <h1 className="title">swisscard</h1>
        <button type="button" className="btn btn-primary btn-swisscard" data-toggle="modal" data-target="#exampleModal">
        Get Started
        </button>
      </div>

      <Price>
      </Price>



<div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">

      <Register>
      </Register>
  
      </div>

      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

      <style jsx>{`
      
      `}</style>

      <style global jsx>{`

      `}</style>

      <script
        src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
        integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
        integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
        crossorigin="anonymous"
      ></script>
    </div>
  );
}

export default App;

