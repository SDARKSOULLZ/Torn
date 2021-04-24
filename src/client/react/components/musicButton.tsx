import * as React from 'react';

import core from '../../core';
import { toggleMusic } from '../../utils/audio';

class MusicButton extends React.Component<{ toggleMusic: boolean }, { muted: boolean }> {
    constructor (props) {
        super(props);

        this.state = {
            muted: false
        };
    }

    click = () => {
        toggleMusic();
        this.setState({ muted: core.muted.music })
    }

    render = () => (Element) => {
        return (
            <div className="music-button" onClick={this.click.bind(this)}>
                {<span><img src={`img/sound/music${!this.state.muted ? `on` : `off`}`} alt="Mute button"/></span>}
            </div>
        );
    }
}

export default MusicButton;
