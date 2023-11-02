import { useState } from 'react';
import SlideShowBox from './SlideShowBox';
import Comment from './Comment';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

export const SIDEBAR_WIDTH = 30; // vw

function SideBar(props) {

    function renderComments(){
        var comments = props.project.comments || [];
        var renderedComments = comments.map((comment) => {
            return (
                <Comment 
                    key={comment.id}
                    avatarUrl={comment.avatarUrl}
                    name={comment.name}
                    text={comment.text}
                />
            );
        })
        return renderedComments
    }

    return (
<Box style={styles.sideBarContainer}>
    <div style={styles.slideShowBoxContainer}>
        <SlideShowBox imageUrls={props.project.images} />
    </div>
    <div style={styles.bottomContainer}>
        <div style={styles.projectInfo}>
            <h1>{props.project.title}</h1>
            <p>{props.project.description}</p>
            <p>{props.project.coords.lat}, {props.project.coords.lng}</p>
        </div>
        <Box style={styles.commentsContainer}>
            <div style={{height: 1, backgroundColor: 'grey', margin: 4}}/>
            <span>
                What your neighbors are saying about this project:
            </span>
            {renderComments()}
            <div style={{height: 1, backgroundColor: 'grey', margin: 4}}/>
            <div style={styles.commentInputContainer}>
                <TextField id="outlined" label="Post a comment ..." variant="outlined" />
                <br/>
                <Button variant="contained">Comment</Button>
            </div>
        </Box>
    </div>
</Box>
    );
}

var styles = {
    sideBarContainer: {
        float: 'right',
        width: SIDEBAR_WIDTH + 'vw',
    },
    bottomContainer: {
        margin: 8,
    },
    slideShowBoxContainer: {
        boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)',
    },
    commentsContainer: {
        margin: 4,
    },
    commentInputContainer: {
        justifyContent: 'space-between',
        alignItems: 'center',
    },


}

export default SideBar;
