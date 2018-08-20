import React, { Component } from 'react'

export default class Render extends Component {
  constructor(props){
    super(props);
 

  }
  
  render() {
    return (
      <div>
      
        <div className="col-md-4" style={{marginTop:'5px',marginBottom:'5px',marginLeft:'30px'}}>
 <div class="card" style={{width:'18rem'}}>
  <img class="card-img-top" src={this.props.valu.Poster} alt="Image Is Not Available" width="300px" height="300px"/>
  <hr/>
  <div class="card-body">
    <h5 class="card-title">{this.props.valu.Title}</h5>
    <hr/>
    <p class="card-text">{this.props.valu.Year}
    <hr/>
    {this.props.valu.Type}
    </p>
  </div>
</div>
      </div>
  
      
</div>
      
      
    )
  }
}
