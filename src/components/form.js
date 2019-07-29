import React from 'react';

const Form = (props) =>{
    return(
        <form onSubmit={props.addCourse}>
           <input type="text" value={props.currant} onChange={props.updateCourse}/>
           <button type="submit"> Add Course</button>
        </form>
    )
}

export default Form;