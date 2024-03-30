import React from 'react';
import '../style/toolbar.scss';
import toolState from "../store/toolState";

const SettingsBar = () => {
    return (
        <div className="settings-bar">
            <label htmlFor="line-width">ТОлщина линии</label>
            <input
                onChange={e => toolState.setLineWidth(e.target.value)}
                style={{
                    margin: '0 10px',
                }}
                id="line-width"
                type="number"
                defaultValue={1}
                min={1}
                max={50}
            />
            <label htmlFor="stroke-color">Цвет обводки</label>
            <input
                type="color"
                onChange={e => toolState.setStrokeColor(e.target.value)}
                id='stroke-color'
            />
        </div>
    );
};

export default SettingsBar;