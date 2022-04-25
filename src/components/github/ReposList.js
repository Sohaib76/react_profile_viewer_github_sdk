import React, { Component } from 'react';
import Repo from './Repo';





class ReposList extends Component {
 
  

  render() {
    var x = 0
    return(
        <div className="row">
            {/* <ul>
                {
                    
                    this.props.userRepos.map(
                        
                        count => {
                            
                            return <li className="list-group-item">{x+=1} 
                          
                            
                            </li>
                        }
                    )

                }
                
            </ul> */}
            <ul className="list-group">
                {
                    this.props.userRepos.map((repo)=>{
                       return <Repo 
                                repo={repo}
                                key={repo.id}
                                {...this.props}
                       />
                    })
                }
            </ul>
        </div>
    )

  }
}




export default ReposList;
