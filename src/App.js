import React from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import "./App.css";

import Homepage from "./pages/Homepage/Homepage";
import ShopPage from "./pages/Shop/Shop-Page";
import Header from "./components/Header/Header-component";
import SignInAndSignUp from "./pages/Sign-in-And-Sign-up/Sign-In-And-Sign-Up";
import {auth, createUserProfileDocument} from './Firebase/Firebase.utils'
import {setCurrentUser} from './Redux/User/User.actions'

class App extends React.Component{
  // having persed the mapDispatchToProps function, we remove the entire constructor cos our app no longer hold the state
  // constructor(){
  //   super();
  //   this.state = {
  //     currentUser: null
  //   }
  // }
unSubscribeFromAuth = null;

componentDidMount(){
  const{setCurrentUser}= this.props;
  this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    // createUserProfileDocument(user);
    // we modify this to know if userauth is null;
    if(userAuth){
      const userRef = await createUserProfileDocument(userAuth);
      userRef.onSnapshot(snapShot => {
        // console.log(snapShot.data())
        // before we applied redux, we have the snapshot code as 
        // this.setState({
        //   currentUser: {
        //     id: snapShot.id,
        //     ...snapShot.data()
        //   }
        // }); but since we are no longer firing our actions from the state anymore, we perse the action from redux actions
        // and apply the setCurrentUser function 
        // instead of using this.props.setCurrentUser, we destructure it and use setCurrentUser
        setCurrentUser({
          id: snapShot.id,
          ...snapShot.data()
        });
      });
    }
    // here too, we use setcurrentuser instead of this.setState({currentUser:userAuth}) as it was before we apply redux actions
    setCurrentUser(userAuth);
  });
}

componentWillUnmount(){
  this.unSubscribeFromAuth();
}
  render(){
    return (
      <div>
      {/* we first perse the currentUser function into our header,when we connect our app to redux, then we remove it from header */}
        <Header/>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
  
}
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
