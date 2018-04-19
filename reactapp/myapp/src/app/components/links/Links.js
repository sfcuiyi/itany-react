import React , {Component} from 'react';
import { Route,Link } from "react-router-dom";
import  Some  from "../some/Some";
import Other from "../other/Other";

class Links extends Component{

    render(){
        // this.props
        //    location
        //    history
        //    match
        //        isExact
        //        url  当前路由的路径,真实的请求路径
        //        path Route组件上path的值
        //        params 路由参数对象
        console.log(this.props)
        return (
            <div>
                {
                    /*
                    <br/>
                    <Link to="/links/some">some</Link>
                    <br/>
                    <Link to="/links/other">other</Link>
                    <Route exact path="/links/some" component={Some}/>
                    <Route path="/links/other" component={Other}/>
                    */
                }
                {/*获取父路由的路径，当前路由的路径*/}
                {/*this.props.match.url*/}
                <br/>
                <Link to={this.props.match.url}>some</Link>
                <br/>
                <Link to={ `${this.props.match.url}/other` }>other</Link>
                <Route exact path={ this.props.match.url } component={Some}/>
                <Route path={ `${this.props.match.url}/other` } component={Other}/>
            </div>

        );
    }

}


export default Links;

