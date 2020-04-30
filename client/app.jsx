class App extends React.Component {
  constructor(props){
        super(props);
        this.state = {
            form: 1
            name : "",
            email : "",
            password : "",
            street1: "",
            street2 : "",
            state : "",
            zip : "",
            phone : "",
            cardNumber : "",
            expiration : "",
            zipCode : ""
        };
    }
    next() {

      this.setState({count:this.state.count +1})
      console.log(this.state.count +1)
         
  }
  render(){
      if(this.state.count===0){
          return <F1 next={this.next.bind(this)}/>
      }else if(this.state.count===1){
          return <F2 next={this.next.bind(this)}/>
      }
      else if(this.state.count===2){
          return <F3 next={this.next.bind(this)}/>
      }
  }
}

class F1 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <form>
        <label>
          Name:
          <input id="name" type="text" name="name" />
        </label>
        <br />
        <label>
          email:
          <input type="text" name="email" />
        </label>
        <br />
        <label>
          password:
          <input type="text" name="password" />
        </label>
        <br />
        <button type="button" onClick = {this.props.next}>Next</button>
      </form>
    );
  }
  
}
class F2 extends React.Component {
  render() {
    return (
      <form>
        <label>
          Line1:
          <input type="text" name="Line1" />
        </label>
        <br />
        <label>
          Line2:
          <input type="text" name="Line2" />
        </label>
        <br />
        <label>
          city:
          <input type="text" name="city" />
        </label>
        <label>
          state:
          <input type="text" name="state" />
        </label>
        <label>
          zip code:
          <input type="text" name="zip code" />
        </label>
        <br />
        <button type="button" onClick = {this.props.next}>Next</button>
      </form>
      
    );
  }
}
class F3 extends React.Component {
  render() {
    return (
      <form>
        <label>
          credit card number:
          <input type="text" name="credit card number" />
        </label>
        <br />
        <label>
          CVV:
          <input type="text" name="CVV" />
        </label>
        <br />
        <label>
          expiry date:
          <input type="text" name="expiry date" />
        </label>
        <br />
        <label>
          billing zip code:
          <input type="text" name="billing zip code" />
        </label>
        <br />
        <button type="button" onClick = {this.props.next}>Next</button>
      </form>
    );
  }
}


ReactDOM.render(<App />, document.getElementById("app"));