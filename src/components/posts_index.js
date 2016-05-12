import React, {Component} from 'react';
import {connect} from 'react-redux';
//import {bindActionCreators} from 'redux';  // we dont need this code anymore since we have refactored the code.
import {fetchPosts} from '../actions/index';
import {Link} from 'react-router';

class Posts extends Component {
     
    componentWillMount() {
     this.props.fetchPosts() ;   
    }
    
    renderPosts()
    {
        return this.props.Posts.map((post)=>{
            return (<li className="list-group-item" key={post.id}>
                <Link to={`posts/${post.id}`}>
                    <span className="pull-xs-right">{post.categories}</span>
                    <strong>{post.title}</strong>
                </Link>
            </li>);
        });
    }
    
    render() {
        return (
            <div>
            <div className="text-xs-right">
                <Link to="posts/new" className="btn btn-primary">Add a Post</Link>
            </div>
              <h3>Posts</h3>  
              <ul className="list-group">
                {this.renderPosts()}
              </ul>
            </div>
        );
    }   
    
}
/*
function mapDispatchToProps(dispatch)
{
    return bindActionCreators({fetchPosts},dispatch);
}


export default connect(null,{mapDispatchToProps})(Posts);
*/
// replace it with this short form

//export default connect(null,{fetchPosts:fetchPosts})(Posts);

// and since we have the same key as the value we can condense the code with ES6 to

function mapStateToProps(state)
{
    
    return{Posts: state.Posts.all};
}
export default connect(mapStateToProps,{fetchPosts})(Posts); 


