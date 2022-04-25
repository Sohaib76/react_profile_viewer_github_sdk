import React, { Component } from 'react';

import './Profiles.css'
import './bootstrap.css';
import ReposList from './ReposList';


class Profile extends Component {
 
  

  render() {

    var localMail = ""
    var localLocation = ""

    if(this.props.userData.email == null){
      localMail =  "abc@SpeechGrammarList.com"
    }
    else if(this.props.userData.email != null){
      localMail = this.props.userData.email
    }
    if(this.props.userData.location == null){
      localLocation =  "abc Street xyz"
    }
    else{
      localLocation = this.props.userData.location
    }
    

    return (
      <div className="container">
      <div className="card">
        <div className="card-header">
        <strong>{this.props.userData.name}</strong>
        </div>
        <div className="card-body">
          <h5 className="card-title"></h5>
          <div className="card-text">
            
              <div className="row">
                <div className="col-md-4">
                  <img src={this.props.userData.avatar_url} className="thumbnail" style={{width:"50%"}}/>
                </div>
                <div className="col-md-8">
                  <div className="row">
                    <div className="col-md-12">
                      <span className="badge badge-primary">{this.props.userData.public_repos} Repositories </span>
                      <span className="badge badge-success">{this.props.userData.public_gists } Public Gists</span>
                      <span className="badge badge-info">{this.props.userData.followers } Followers </span>
                      <span className="badge badge-danger">{this.props.userData.following } Following </span>
                    </div>
                  </div>
                  <hr />

                  <div className="row">
                    <div className="col-md-12">
                      <ul className="list-group">
                        <li className="list-group-item"><strong>UserName : </strong>{this.props.userData.login}</li>
                        <li className="list-group-item"><strong>Location : </strong>{localLocation}</li>
                        <li className="list-group-item"><strong>Email Address : </strong>{localMail}</li>
                      </ul>
                    </div>

                    
                  </div>
                  <br />
                    
                    <a className="btn btn-primary" target="_blank" href={this.props.userData.html_url}>Visit The Profile</a>
                </div>

              
              
               
              
            
            </div>
            <hr/>
            <h3 >User Repositories </h3>
            <ReposList userRepos={this.props.userRepos}/>
          </div>
          
        </div>
       
      </div>
      </div>
      
    );
  }
}




export default Profile;
