import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import { useEffect, useState } from 'react';

function Marker(props) {
    var text = props.text || "";

    return (
<div style={styles.marker}>
    <MapsHomeWorkIcon color={props.highlighted ? 'primary':'inherit'} fontSize='large'/>
</div>
    );
}

var styles = {
    marker: {
        width: 40,
        height: 40,
    }
}
        
export default Marker;
