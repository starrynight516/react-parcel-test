import * as React from "react";
import * as ReactDOM from "react-dom";

interface AppProps {
    title: string;
}
interface AppState {
    iptUser: string;
    iptContent: string;
    list: {
        id: number;
        name: string;
        content: string;
    }[];
}
class App extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);
        this.state = {
            iptUser: "",
            iptContent: "",
            list: [
                { id: 1, name: "peter", content: "在吗？" },
                { id: 2, name: "alex", content: "怎么了？" },
            ]
        };
    }

    render() {
        const { iptContent, iptUser, list } = this.state;
        return (
            <div>
                <h3>{this.props.title}</h3>
                内容：<input type="text" value={iptContent} onChange={this.changeIpt} name={"iptContent"} />
                <br />
                名字：<input type="text" value={iptUser} onChange={this.changeIpt} name={"iptUser"} />
                <br />
                <input type="button" value="发送" onClick={this.add} />
                <input type="button" value="清空" onClick={this.empty} />
                <br />
                <ul>
                    {
                        list.map((item, index) => (
                            <li key={index}>
                                <span>{item.content}</span>
                                <span>{item.name}</span>
                                <button onClick={this.delete.bind(null, index)}>删除</button>
                            </li>
                        )
                        )
                    }
                </ul>
            </div>
        );
    }

    changeIpt = (ev: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            [ev.target.name]: ev.target.value,
        } as any);
    }

    add = () => {
        let arr = [...this.state.list];
        arr.push({
            id: arr.length + 1,
            name: this.state.iptUser,
            content: this.state.iptContent,
        });
        this.setState({
            list: arr,
            iptUser: "",
            iptContent: ""
        });
    }

    delete = (index: number) => {
        let arr = [...this.state.list];
        arr.splice(index, 1);
        this.setState({
            list: arr,
        });
    }

    empty = () => {
        let arr = [...this.state.list];
        arr.length = 0;
        this.setState({
            list: arr,
        })
    }
}

ReactDOM.render(
    <App title={"留言版"} />,
    document.getElementById("root"),
);