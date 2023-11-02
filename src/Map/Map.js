import GoogleMapReact from 'google-map-react';
import { SIDEBAR_WIDTH } from '../SideBar/SideBar';
import Marker from './Marker';
import { useState, useEffect } from 'react';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

const DEFAULT_COORDS = {
    lat: 52.370216,
    lng: 4.895168,
};

function Map(props) {
    const [markers, setMarkers] = useState([]) // TODO set markers
    const [coords, setCoords] = useState(DEFAULT_COORDS)
    var projects = props.projects || [];

    useEffect(() => {
        setCoords(props.coords)
    }, [props.coords])

    useEffect(() => {
        renderMarkers()
    }, [props.projects, props.currentProject])
    
    function renderMarkers() {
        console.log("rendering markers")
        var renderededMarkers = projects.map((project) => {
            var isCurrentProject = project.id === props.currentProject.id ? true : false
            return (
                <Marker
                    key={project.id}
                    lat={project.coords.lat}
                    lng={project.coords.lng}
                    text={project.title}
                    highlighted={isCurrentProject}
                />
            );
        })
        setMarkers(renderededMarkers)
    }

    function onLeftClick() {
        var index = projects.indexOf(props.currentProject)
        var nextProject = projects[index+1] || projects[0]
        props.setCurrentProject(nextProject)
        
        renderMarkers()
    }

    function onRightClick() {
        var index = projects.indexOf(props.currentProject)
        var nextProject = projects[index-1] || projects[projects.length-1]
        props.setCurrentProject(nextProject)
        
        renderMarkers()
    }

    return (
<div style={styles.mapContainer}>
    <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAFmTSc0wKvPjzBMT3Z1iBzd6FI6fY7qyM" }}
        center={coords}
        zoom={15}
        onChildClick={(key) => alert(key)}
    >
        {markers}
    </GoogleMapReact>
    <div style={styles.bottomOverlay}>
        <ArrowCircleLeftIcon style={styles.arrow} onClick={onLeftClick}/>
        <ArrowCircleRightIcon style={styles.arrow} onClick={onRightClick}/>
    </div>
</div>
);
}

var styles = {
    mapContainer: {
        height: '100vh',
        float: 'left',
        width: 100-SIDEBAR_WIDTH + 'vw',
    },
    bottomOverlay: {
        position: 'absolute',
        bottom: 10,
        width: 100-SIDEBAR_WIDTH + 'vw',
        display: 'flex',
        justifyContent: 'center',
    },
    arrow: {
        fontSize: 64,
        color: '#4C8BF5',
        margin: 10,
    },
}

export default Map;

