import React,{Component} from "react"
import { Link } from 'react-router-dom'
import $ from 'jquery'

export default class Nav extends Component{

    constructor(props)
    {
        super(props);
        this.state = {
            bookList:[]
        }
        this.loadData();
    }

    loadData(){
        $.ajax({
            url:'http://127.0.0.1/bookApi/bookType.php',
            dataType:'jsonp',
            success:({result})=>{
                this.setState({
                    bookList:result
                })
            }
        });
    }
    formatData(){
        return this.state.bookList.map((v,i) => {
            return (
                <li  key={i}>
                    <Link to={`/books/${v.id}`}>{v.typeName}</Link>
                </li>
            )
        })
    }
    render(){

        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            {this.formatData()}
                        </ul>
                    </div>
                </div>
            </nav>
        )

    }

}