import React, { Component } from "react";
import ApiContext from './ApiContext';


class AddFolder extends Component {
   static contextType = ApiContext;

  


  handleSubmit(event) {
    event.preventDefault();
    console.log(event.target);
    const name = event.target.newName.value;
    
    this.context.addFolder(name);
    this.goBack()
  }


  goBack(){
      this.props.history.push('/')
  }
  render() {
   
    console.log(this.context);
    return (
        <form className="addBookmarkForm" onSubmit={e => this.handleSubmit(e)}>
            <fieldset name="formField">
          
          <input id="newName" type="text"  placeholder="Name" name="newName"/>
          <br />
            
          <div className="submitFolder">
            <button className="AddSubmit" id="submit" type="submit">Submit</button>
          </div>   
          <div className="error-container">
          <div id="thisModal" aria-modal="true" className="modal">
            <div className="modal-content">
            <span className="close">&times;</span>
            <p></p>
            </div>   
        </div> 
        </div>  
        </fieldset>
      </form>
    );
  }
}
export default AddFolder;