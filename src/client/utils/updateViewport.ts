import core from '../core';

const updateViewport = () => {
    core.canvas.width = window.innerWidth;
    core.canvas.height = window.innerHeight;
};

export default updateViewport;
