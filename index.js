import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            iptUser:'',
            iptContent:'',
            list:[
                {id:1,name:'peter',content:'在吗？'},
                {id:2,name:'alex',content:'怎么了？'},
            ]
        };
        this.add=this.add.bind(this);
        this.delete=this.delete.bind(this);
        this.empty=this.empty.bind(this);
        this.changeIpt=this.changeIpt.bind(this);
    }

    render() {
        let list=this.state.list;

        return (
            <div>
                <h3>{this.props.title}</h3>
                内容：<input type='text' value={this.state.iptContent} onChange={this.changeIpt}  name={'iptContent'} />
                <br/>
                名字：<input type='text' value={this.state.iptUser} onChange={this.changeIpt} name={'iptUser'}/>
                <br/>
                <input type='button' value='发送' onClick={this.add}/>
                <input type='button' value='清空' onClick={this.empty}/>
                <br/>
                <ul>
                    {
                        list.map((item,index)=>(
                            <li key={index}>
                                <span>{item.content}</span>
                                <span>{item.name}</span>
                                <button href="#" onClick={this.delete.bind(null,index)}>删除</button>
                            </li>
                            )
                        )
                    }
                </ul>
            </div>
        );
    }

    changeIpt(ev) {
        this.setState({
            [ev.target.name]:ev.target.value,
        })
    }

    add() {
        let arr=[...this.state.list];
        arr.push({
            id:arr.length+1,
            name:this.state.iptUser,
            content:this.state.iptContent,
        });
        this.setState({
            list:arr,
            iptUser:'',
            iptContent:''
          });
    }

    delete(index) {
        let arr=[...this.state.list];
        arr.splice(index,1);
        this.setState({
            list:arr,
        });
    }

    empty() {
        let arr=[...this.state.list];
        arr.length=0;
        this.setState({
            list:arr,
        })
    }
}

ReactDOM.render(
    <App title={"留言版"}/>,
    document.getElementById("root"),
);