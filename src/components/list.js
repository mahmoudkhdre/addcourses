import React, { Component } from 'react';




class List extends Component {
  state ={
    isEdate : false
  }

  renderCourse =() => {
   return(
    <li>
    <span>{this.props.details.name}</span>
    <button onClick={() => {this.props.deleteCourse(this.props.index)}}>delete course</button>
    <button onClick={() => {this.toggleState()}}> edite Course</button>
 </li>
   )
  }


  // toggle state
    toggleState = () =>{
      let {isEdate} =this.state;
      this.setState({
        isEdate : !isEdate
      })
    }

    updateCourseItem = (e) => {
        e.preventDefault();
        this.props.editeCourse(this.props.index , this.input.value);
        this.toggleState();
    }

 // render update form
 
  renderUpdateForm = () => {
    return(
      <form onSubmit={this.updateCourseItem}>
        <input type="text" ref={(v)  => {this.input =v}} defaultValue={this.props.details.name}  required/>
        <button>update Course</button>
      </form>
    )
  }
  render(){
    let {isEdate} =this.state;
    
    return(
   <React.Fragment>
     { isEdate ? this.renderUpdateForm() : this.renderCourse()}
   </React.Fragment>
    );
  }
}
export default List;