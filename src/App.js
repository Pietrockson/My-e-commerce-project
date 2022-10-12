import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage/Homepage";
import ShopPage from "./pages/Shop/Shop-Page";
import Header from "./components/Header/Header-component";
import SignInAndSignUp from "./pages/Sign-in-And-Sign-up/Sign-In-And-Sign-Up";
import {auth, createUserProfileDocument} from './Firebase/Firebase.utils'

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      currentUser: null
    }
  }
unSubscribeFromAuth = null;

componentDidMount(){
  this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    // createUserProfileDocument(user);
    // we modify this to know if userauth is null;
    if(userAuth){
      const userRef = await createUserProfileDocument(userAuth);
      userRef.onSnapshot(snapShot => {
        // console.log(snapShot.data())
        this.setState({
          currentUser: {
            id: snapShot.id,
            ...snapShot.data()
          }
        });
        console.log(this.state);
      });
    }
    this.setState({currentUser:userAuth});
  });
}

componentWillUnmount(){
  this.unSubscribeFromAuth();
}
  render(){
    return (
      <div>
        <Header currentUser= {this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
  
}

export default App;
