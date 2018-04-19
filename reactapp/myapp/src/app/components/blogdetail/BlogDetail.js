
import React , {Component} from 'react';


class BlogDetail extends Component{

    render(){
        console.log(this.props.match.params.id)
        return (
            <h1>this is BlogDetail Page.....id : {this.props.match.params.id}</h1>
        );
    }

}


export default BlogDetail;

