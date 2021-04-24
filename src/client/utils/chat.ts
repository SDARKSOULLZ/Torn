const chatCanvas: HTMLCanvasElement = document.createElement(`canvas`);

chatCanvas.width = 650;
chatCanvas.height = 350;

const chatCTX: CanvasRenderingContext2D = chatCanvas.getContext(`2d`, { alpha: true });

export {
    chatCanvas,
    chatCTX
};
