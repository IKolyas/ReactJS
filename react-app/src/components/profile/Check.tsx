import * as React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { actionChecked } from "../../redux/store";
import Switch from '@mui/material/Switch';
const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default function BasicSwitches() {
    const dispatch = useDispatch();
    const currentState = useSelector((state) => state)

    return (
        <div>
            <Switch
                onChange={() => dispatch(actionChecked())}
                {...label} defaultChecked />
            <h2>{currentState ? "ВКЛ" : "ВЫКЛ"}</h2>
        </div>
    );
}
