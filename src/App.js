import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Render from './Render'
class App extends Component {
  componentWillMount(){
    fetch(`http://www.omdbapi.com/?s=${this.state.firstQuery}&apikey=f361da5e`)

    .then(response => response.json())
    .then(result =>{
      this.setState({
        list:result.Search
      })
      console.log(this.state.list)
    })

    
    .catch(error => error);
  }
  constructor(props){
    super(props)
    this.state={
     searchQuery:'',
     list:[],
     firstQuery:'2018'
    }
    fetch(`http://www.omdbapi.com/?s=${this.state.firstQuery}&apikey=f361da5e`)

    .then(response => response.json())
    .then(result =>{
      this.setState({
        list:result.Search
      })
      console.log(this.state.list)
    })

    
    .catch(error => error);
  }
  updText(e){
    this.setState({
      searchQuery:e.target.value
    })
  }
  searchingData(e){
    fetch(`http://www.omdbapi.com/?s=${this.state.searchQuery}&apikey=f361da5e`)

.then(response => response.json())
.then(result => {this.setSearchTopStories(result)
console.log(result)
}
)
.catch(error => error);
  }
  setSearchTopStories(result){
    let listo=result.Search
    this.setState({
      searchQuery:'',
  list:listo
       })
       this.refs.textInput.focus();
  }
  // listo(){
  //     if(!this.state.result){
  //       return null;
  //     }
  //     else{
  //      let notes = this.state.result.hits
  //      this.setState({
  //        list:notes
  //      })
  //     }
  //   }
  render() {
    // let lists=this.state.list
    // let listu=lists.map(val=>{
    //   return <li>{val.title}</li>
    // })
    console.log(this.state.list)
    let lista=this.state.list
      let listu=lista.map((val,key)=>{
        return <Render valu={val} keys={key} lista={this.state.list}  />
      })
    return (
     <div>
       <div className="container">
      <div className='text-center text-white'>
      <h1 className="display-2" style={{fontFamily:'Do Hyeon, sans-serif'}}>Movie Mania</h1>
      </div>
       <div className="jumbotron">
     
    <div>
<h1 className="text-center" style={{fontFamily:'Lobster, cursive'}}>Now You Can Easily Check Out Releasing Year Of Any Movie And Series</h1>
    </div>
  </div>
   <div className="row" style={{marginTop:'10px',marginLeft:'35px'}}> 
   <div className="col-md-10">
    <input onChange={(e)=>this.updText(e)} type="text" ref='textInput' className="form-control" value={this.state.searchQuery} placeholder="Search" />
  </div>
  <div className="col-md-2">
  <button onClick={(e)=>this.searchingData(e)} className="btn btn-default">Search</button>
  
     </div>
      </div>
      <div className="row">
      {listu}
      </div>
       </div>
       </div>
    );
  }
}

export default App;
