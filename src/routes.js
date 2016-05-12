import React from 'react';
import {Route,IndexRoute} from 'react-router';
import App from './components/App';
import PostsIndex from './components/posts_index.js';
import PostsNew from './components/posts_new';
import PostsShow from './components/posts_show';


export default (
<Route path="/" component={App}>
    <IndexRoute component={PostsIndex}/> 
    <Route path="posts">
        <IndexRoute component={PostsIndex}/> 
        <Route path="new" component={PostsNew}/>
        <Route path=":id" component={PostsShow}/>
    </Route>  
</Route>
);