import React,{Component} from "react"
import $ from 'jquery'

export default class BookList extends Component{

    constructor(props){
        super(props);
        this.state = {
            result:[]
        }
        this.loadData(1);
    }
    componentWillReceiveProps(recProps){
        this.loadData(recProps.match.params.id);
    }
    loadData(bookType){
        $.ajax({
            url:'http://127.0.0.1/bookApi/book.php',
            data:{bookType},
            dataType:'jsonp',
            success:({result})=>{
                this.setState({result})
            }
        });
    }

    formatData(){
        return this.state.result.map((v,i) => {
            return (
                <div className="panel panel-default" key={i}>
                    <div className="panel-heading">
                        {v.bookName}
                    </div>
                    <div className="panel-body">
                        {v.des}
                    </div>
                </div>
            )
        })
    }
    render()
    {
        return <div>{this.formatData()}</div>
    }

}