import React , {Component} from 'react';
import { Link } from "react-router-dom";

class BlogList extends Component{

    blogs = [
        {title:'React 从入门到放弃',content:'标题都是胡扯的，呵呵',id:1,publishDate:'2018年04月19日15:40:15'},
        {title:'Node 从安装到卸载',content:'标题都是胡扯的，呵呵',id:2,publishDate:'2018年04月19日15:40:15'},
        {title:'Angular 从入门到住院',content:'标题都是胡扯的，呵呵',id:3,publishDate:'2018年04月19日15:40:15'},
        {title:'PHP 是世界上最好的语言，没有之一',content:'标题都是胡扯的，呵呵',id:4,publishDate:'2018年04月19日15:40:15'}
    ];
    
    formatData(){
        return this.blogs.map((value,index) => {
            return  ( 
                <h1 key={index}>
                    <Link to={`/blogdetail/${value.id}`}>{value.title}</Link>
                </h1> 
            )
        })
    }

    render(){
        return (
            <div>
                {this.formatData()}
            </div>
        );
    }

}


export default BlogList;

