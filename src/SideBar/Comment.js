import React from "react";
import Avatar from '@mui/material/Avatar';

export default function Comment(props) {

    return (
<div>
    <div style={styles.commenterInfoContainer}>
        <Avatar alt="Remy Sharp" src={props.avatarUrl || 'https://www.w3schools.com/howto/img_avatar.png'} />
        <div style={styles.commenterName}>{props.name}</div>
    </div>
    <div style={styles.commentText}>
        {props.text}
    </div>
</div>
    );
};

var styles = {
    commenterInfoContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    commenterAvatar: {
        height: 32,
        width: 32,
        borderRadius: 16,
        backgroundColor: 'grey',
        margin: 10,
        border: '1px solid black',
    },
    commenterName: {
        fontSize: 20,
        fontWeight: 'bold',
    },
};