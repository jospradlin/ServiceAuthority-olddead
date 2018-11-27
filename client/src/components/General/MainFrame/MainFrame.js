import React from 'react';
import Aux from '../Aux/Aux';
import './MainFrame.css';

const mainframe = (props) => (
    <Aux>
        <div className="MainFrameTable">
            <div className="MainFrame-Cell Left">{props.title}</div>
            <div className="MainFrame-Cell Right">
                <a href="" onClick={props.helpClickHandler}>
                    <i className="ion-help-circled"></i>
                </a>
            </div>
        </div>



        <div className="MainFrameRow">
            {props.children}
        </div>
    </Aux>
);






export default mainframe;