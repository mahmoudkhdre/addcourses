import React, { Component } from 'react';
  import Form from './components/form';
  import List from './components/list';




class App extends Component {
  state = {
    courses : [
      { name : "html"},
      { name : "css"},
      { name : "javascript"},
      { name : "php"}
    ],
    currant: ''
  }


  // update course

    updateCourse = (e) => {
      this.setState({
        currant: e.target.value
      })
    }



  // add course
    addCourse = (e) => {
      e.preventDefault();
      let currant = this.state.currant;
      let courses = this.state.courses;
    if( currant = currant ){
      courses.push({name:currant})
      this.setState({
        courses,
        currant:''
        
      })
    }
     
    }

    // delete course
      deleteCourse = (index) => {
          let courses =this.state.courses;
          courses.splice(index , 1);
          this.setState({
            courses
          })
      }

      // editeCourse
      editeCourse = (index,value) => {
        let courses = this.state.courses;
        let course =  courses[index];
        course['name'] = value;
        this.setState({
          courses
        })
      }

  render(){
    const {courses} = this.state;
    const courseList = courses.map( (course , index) => {
        return  <List details={course} key={index} index={index} deleteCourse={this.deleteCourse} editeCourse={this.editeCourse}/> 
    })
    return(
      <section className="App">
      <h2> Add Courses</h2>
      
        <Form  currant={this.state.currant} updateCourse= {this.updateCourse} addCourse={this.addCourse} />
        <ul> { this.state.courses.length  > 0 ? courseList : <p>There Is No Courses To Show</p> }</ul>
      
      </section>
    );
  }
}
export default App;