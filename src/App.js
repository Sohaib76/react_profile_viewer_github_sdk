import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import PropTypes from 'prop-types';
import $ from 'jquery';
import Profile from './components/github/Profile';
import Search from './components/github/Search';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      userName : "Sohaib76",
      userData : [],
      userRepos : [],
      reposPerPage : 10
    }

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  //Get UserData From Github
  getUserData(){
    $.ajax({
      url : 'https://api.github.com/users/'+this.state.userName+'?client_id='
      +this.props.clientId+'&client_secret='+this.props.clientSecret,
      dataType : 'json',
      cache : false,
      success : function (data) {
          this.setState({
            userData : data
          })
          console.log(data)
        }.bind(this),
        error: function(xhr, status, err){
          this.setState({
            userName : null
          })
          alert(err);
        }.bind(this)

    })
  }

    //Get User Repos From Github
    getUserRepos(){
      $.ajax({
        url : 'https://api.github.com/users/'+this.state.userName+'/repos?per_page='+this.state.reposPerPage+'&client_id='
        +this.props.clientId+'&client_secret='+this.props.clientSecret+"&sort=created",
        dataType : 'json',
        cache : false,
        success : function (data) {
            this.setState({
              userRepos : data
            })
            console.log(data)
          }.bind(this),
          error: function(xhr, status, err){
            this.setState({
              userName : null
            })
            alert(err);
          }.bind(this)
  
      })
    }


    handleFormSubmit(userName){
      this.setState(
        
          {userName : userName},
          function () {
            this.getUserData();
            this.getUserRepos();
            
        }
      );
    }

  componentDidMount() {
    this.getUserData();
    this.getUserRepos();
  }
  

  render() {
    return (
      <div >
          
          <NavBar />
          <Search  onFormSubmit= {this.handleFormSubmit}/>
          <Profile {...this.state}/>
        
      </div>
    );
  }
}

App.propTypes = {
  clientId : PropTypes.string,
  clientSecret : PropTypes.string
}

App.defaultProps = {
  clientId : "Iv1.55df401147121497",
  clientSecret : "7a79cef239e4e3944f0561dc0e24d37852decb23"
}



export default App;
