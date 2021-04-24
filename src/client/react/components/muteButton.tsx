import * as React from 'react';

import core from '../../core';
import { toggleAudio } from '../../utils/audio';

class MuteButton extends React.Component<{ toggleSFX: boolean }, { muted: boolean }> {
    constructor (props) {
        super(props);

        this.state = {
            muted: false
        };
    }

    click = () => {
        toggleAudio();
        this.setState({ muted: core.muted.sfx })
    }

    render = () => (Element) => {
        return (
            <div className="mute-button" onClick={this.click.bind(this)}>
                {<span><img src={`img/sound/sound${!this.state.muted ? `on` : `off`}`} alt="Mute button"/></span>}
            </div>
        );
    }
}

export default MuteButton;
