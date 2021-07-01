import React ,{Component} from "react";
import CommentList from "./CommentList";
import PostList from "./PostList";
import FreelancerList from "./FreelancerList";
import Home from "./Home";
import NewCommentForm from "./NewCommentForm";
import NewCommentModal from "./NewCommentModal";
class StyleTest extends Component{

    render() {


        var HeaderStyle = {
            padding: 10,
            margin: 10,
            backgroundColor: "#ffde00",
            color: "#333",
            display: "inline-block",
            fontFamily: "monospace",
            fontSize: "32",
            textAlign: "center"
        };
        return (
            <div style={HeaderStyle}>hello bonjour

            <Home/>
            </div>
        )
    }
};

export default StyleTest