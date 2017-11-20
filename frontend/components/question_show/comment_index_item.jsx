import React from 'react';
import { Link } from 'react-router-dom';
import EditAnswerEditorContainer from '../edit-answer-editor/edit_answer_editor_container';
import CommentEditorContainer from '../comment_editor/comment_editor_container';

class CommentIndexItem extends React.Component{
  constructor(props){
    super(props);
    this.rawMarkup = this.rawMarkup.bind(this);
    this.deleteComment = this.deleteComment.bind(this);
    this.state = {
      editMode: false,
      showCommentEditor: false
    };
  }

  deleteComment(){
    this.props.deleteComment(this.props.comment.id);
  }

  rawMarkup(rawMarkup){
    return { __html: rawMarkup };
  }

  render(){

    const comment = this.props.comment;
    const initials = comment.authorName.split(" ").map((n)=>n[0]).join("");
    return (
      <div className="comment-wrapper">
        <div className="comment-editor-header">
            {initials}
        </div>
        <div className="comment-content">
          <div className="comment-header">
            <div>
              <div className="comment-author">{comment.authorName}</div>
              <div className="comment-item">{comment.date}</div>
            </div>
            { comment.commentAuthorId === this.props.currentUserId ?
              <a onClick={this.deleteComment} className="comment-item">Delete Comment</a>
              : null
             }
          </div>
          <div className="comment-body">
            <li><span dangerouslySetInnerHTML={this.rawMarkup(comment.body)} /></li>
          </div>
        </div>
      </div>
    );
  }
}

export default CommentIndexItem;
