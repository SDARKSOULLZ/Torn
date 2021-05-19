const loadJSON = (url: string) => {
    const req: XMLHttpRequest = new XMLHttpRequest();
    req.open(`GET`, url, false);

    let data = ``;
    req.onload = (e) => {
        if (req.readyState === 4) data = req.responseText;
    };

    req.send();
    return JSON.parse(data);
};

export default loadJSON;
