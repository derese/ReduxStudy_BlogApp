import React, {Component,PropTypes} from 'react';
import {reduxForm} from 'redux-form';
import {createPost} from '../actions/index';
import {Link} from 'react-router';

class PostsNew   extends Component {
    
  
   static contextTypes = {
        router : PropTypes.object
    };
    onSubmit(props)
    {
        this.props.createPost(props).then((res)=>{
            //console.log(res);            
          //blog has been created navigate to the user to index
          if(!res.error)
          this.context.router.push("/");
        });
    }
    render() {
        const {fields:{title,categories,content},handleSubmit} = this.props;
        //console.log(this.props.invalid);
        
        return (
           <form onSubmit={(handleSubmit(this.onSubmit.bind(this)))}>
            <h3>Create a new post</h3>
                <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
                    <label>Title</label>
                    <input type="text" className="form-control" {...title} ></input>
                    <div className="text-help">
                        {title.touched?title.error:''}
                    </div>
                </div>
                <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
                    <label>categories</label>
                    <input type="text" className="form-control" {...categories}></input>
                     <div className="text-help">
                        {categories.touched?categories.error:''}
                    </div>
                </div>
                <div className={`form-group ${content.touched && content.invalid ? 'has-danger':''}`}>
                    <label>content</label>
                    <textarea type="text" className="form-control" {...content}></textarea>
                     <div className="text-help">
                        {content.touched?content.error:''}
                    </div>
                </div>
                
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
           </form>
        );
    }
}



function validate(value)
{
    const errors = {};
    
    if(!value.title)
    errors.title = "Enter Title";
    if(!value.categories)
    errors.categories = "Enter Categories";
    if(!value.content)
    errors.content = "Enter Content";
    return errors;
}


//connect first argument is mapStateToProps , 2nd MapStatetoDispatch
//reduxForm first argument is config, 2nd is MapStateToProps , 3rd is MapStatetoDispatch

export default reduxForm({
    form:'PostsNewForm',
    fields:['title','categories','content'] ,
    validate      
},null,{createPost})(PostsNew);