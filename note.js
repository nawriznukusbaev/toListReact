import "./App.css";
import React from "react";
const styleDiv = {
    minWidth: "150px",
    maxWidth: "fit-content",
    display: "flex",
    border: "1px solid #000",
    padding: "2px",
};
class Note extends React.Component {
    constructor(props) {
        super(props);
        var arr = [];
        this.arr = arr;
        this.state = {
            list: this.arr,
        };
        this.addNote = this.addNote.bind(this);
        this.delNote = this.delNote.bind(this);
        this.ListNote = this.ListNote.bind(this);
        this.ShowNote = this.ShowNote.bind(this);
    }
    addNote(e) {
        if (e.code === "Enter" && e.target.value!=="") {
            this.arr.push(e.target.value);
            this.setState({
                list: this.arr,
            });
            e.target.value = "";
        }
    }
    ShowNote() {
        return <input type="text" onKeyUp={this.addNote} />;
    }
    delNote(e) {
        e.preventDefault();
        var note = e.target.parentElement;
        this.arr.splice(note.dataset.id, 1);
        this.setState({
            list: this.arr,
        });
    }
    ListNote(props) {
        const styleNote = {
            padding: "2px",
            border: "1px solid #000",
            display: "flex",
            justifyContent: "space-between",
        };
        const font = {
            marginLeft: "5px",
            fontSize: "10px",
            border: "1px solid #000",
            height: "fit-content",
            padding: "2px",
            borderRadius: "50%",
            cursor: "pointer",
        };
        return (
            <div style={styleNote} data-id={props.id}>
                <span>{props.note}</span>
                <span onClick={this.delNote} style={font}>
          x
        </span>
            </div>
        );
    }
    render() {
        return (
            <div style={styleDiv}>
                {this.state.list.map((item, index) => {
                    return <this.ListNote note={item} key={index} id={index} />;
                })}
                <this.ShowNote />
            </div>
        );
    }
}
export default Note;