import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';


class ToDoList extends React.Component {
    constructor(props) {
        super(props);
        let note = '';
        let arr = [];
        this.arr = arr;
        this.note = note;

        this.state = {
            list: this.arr,
            note: note,
            count: 0
        };

        this.addNote = this.addNote.bind(this);
        this.removeForm = this.removeForm.bind(this);
        this.ShowNote = this.ShowNote.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.noteDecoration = this.noteDecoration.bind(this);
    }

    handleChange(event) {
        this.note = event.target.value;
        this.setState({note: this.note})
    }

    addNote() {
        this.arr.push(this.state.note);
        this.setState({arrInput: this.arr,});
        this.setState({count:this.state.count+1});
    }

    removeForm(event) {
        event.preventDefault();
        let note = event.target.parentElement;
        this.arr.splice(note.dataset.id, 1);
        this.setState({
            list: this.arr,
            count:this.state.count-1
        });

    }

    noteDecoration(event){
        if(event.target.checked===true){
            event.target.parentElement.style="text-decoration:line-through";
        }
        else event.target.parentElement.style="text-decoration:none";

    }

    ShowNote(props) {
        const styleNote = {
            border: "solid 1px black",
            height: "50px",
            width: "400px",
            padding: "5px",
            margin: "1px",
            fontSize: "20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
        }
        const font = {
            marginRight: "5px",
            fontSize: "20px",
            border: "1px solid #000",
            height: "fit-content",
            padding: "5px 10px 5px 10px",
            borderRadius: "50%",
            backgroundColor: "red",
            color: "white",
            cursor: "pointer",
        };
        return (<div style={styleNote} data-id={props.id}>

                <p style={{fontSize: "20px"}}><input style={{float:"left"}} type={"checkbox"} onClick={this.noteDecoration}/>{props.note}</p>
                <span style={font} onClick={this.removeForm}>X</span>

            </div>

        );
    }

    render() {
        return (
            <div>
                {this.state.list.map((item, index) => {
                    return <this.ShowNote note={item} key={index} id={index}/>;
                })}
                <input style={{ height: "50px", width: "300px",}} type={"text"} value={this.state.note} onChange={this.handleChange}/>
                <button style={{ height: "50px", width: "80px",}} onClick={this.addNote}>Add#{this.state.count}</button>
            </div>
        );
    }
}

export default ToDoList;

reportWebVitals();



