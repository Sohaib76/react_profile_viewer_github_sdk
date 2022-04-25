import React, { Component } from 'react';


import './bootstrap.css';


class Search extends Component {

  constructor(props){
      super(props);
      this.onSubmit = this.onSubmit.bind(this);

  }
 
  onSubmit(e){
        e.preventDefault();
        let username = this.refs.username.value.trim()
        if(!username){
            alert("Please Enter Valid UserName") 
            return;
        }
        this.props.onFormSubmit(username);
        this.refs.username.value = "";
  }

  render() {

    
    return(
        <div className='container'>

            <form onSubmit={this.onSubmit}>
                <label style={{marginTop:"30px"}}>Search Github Users</label>
                <input type="text" ref="username" className="form-control"/>
            </form>
        </div>
    )

  }
}




export default Search;
