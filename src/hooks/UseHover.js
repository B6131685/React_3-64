import React from "react";

function useHover() {

    const [hover, setHover] = React.useState(false);

    const  mouseOver = () => {
        setHover(true);
    }

    const  mousOut = () => {
        setHover(false);
    }

    return [ hover, mouseOver, mousOut]
}

export default useHover