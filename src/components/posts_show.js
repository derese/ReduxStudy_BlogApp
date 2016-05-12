import React, {Component,PropTypes} from 'react';
import {connect} from 'react-redux';
import {fetchPost,deletePost} from '../actions/index';
import {Link} from 'react-router';

class PostsShow extends Component {
    
     static contextTypes = {
        router : PropTypes.object
    };
    
    componentWillMount() {
        this.props.fetchPost(this.props.params.id);
    }
    
    onDeleteClikc()
    {
        this.props.deletePost(this.props.params.id).then((res)=>{
            if(!res.error)
             this.context.router.push("/");
        });
    }
    
    render() {
        console.log(this.props.post);
        if(!this.props.post)
        {
            return(<div>Loading...</div>);
        }
        return (           
            <div>
            <Link to="/">Posts List</Link>
            <button className="btn btn-danger pull-xs-right" onClick={this.onDeleteClikc.bind(this)}>Delete Post</button>
                <h3>Title: {this.props.post.title}</h3>   
                <h6>Categories: {this.props.post.categories}</h6>   
                
                <p>{this.props.post.content}</p>          
            </div>
        );
    }
}

function mapStateToProps(state)
{
    return { post:state.Posts.post };
}

export default connect(mapStateToProps,{fetchPost,deletePost})(PostsShow);