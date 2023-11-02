import React, { useRef } from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export default function SlideShowBox(props) {
  const sliderRef = useRef(null);
  const scrollAmount = 100;

  return (
    <div style={styles.boxContainer}>
      <button
        style={styles.navBtn}
        onClick={() => {
          const container = sliderRef.current;
          container.scrollLeft -= scrollAmount;
        }}
      >
        <ChevronLeftIcon />
      </button>
      <div style={styles.imagesContainer} ref={sliderRef}>
        {props.imageUrls.map((image, index) => {
            console.log(image)
          return (
            <img
              style={styles.image}
              alt="sliderImage"
              key={index}
              src={image}
            />
          );
        })}
      </div>
      <button
        style={styles.navBtn}
        onClick={() => {
          const container = sliderRef.current;
          container.scrollLeft += scrollAmount;
        }}
      >
        <ChevronRightIcon />
      </button>
    </div>
  );
};

var styles = {
    navBtn: {
        color: "inherit",
        border: "none",
        padding: 0,
        font: "inherit",
        cursor: "pointer",
        outline: "inherit",
        backgroundColor: "#c3c3c3",
        borderRadius: "4px",
        height: "200px",
        width: "30px",
        margin: "2px",
    },
    imagesContainer: {
        display: "flex",
        maxWidth: "500px",
        overflow: "scroll",
        scrollBehavior: "smooth",
        transition: "scroll 0.3s ease-in-out",
    },
    image: {
        width: "200px",
        height: "200px",
        margin: "2px",
        borderRadius: "4px",
    },
    boxContainer: {
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
    }
};