import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import MessageIcon from '@mui/icons-material/Message';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from "react-router-dom";

export default function IconTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Tabs
            value={value}
            onChange={handleChange}
            aria-label="icon position tabs example"
        >
            <Link to="/">
                <Tab icon={<HomeIcon color="secondary" />} label="HOME" sx={{color: 'white'}}/>
            </Link>
            <Link to="/chat/1">
                <Tab icon={<MessageIcon color="secondary" />} label="CHAT" sx={{color: 'white'}} />
            </Link>
            <Link to="/profile">
                <Tab icon={<AccountBoxIcon color="secondary"/>} label="PROFILE" sx={{color: 'white'}} />
            </Link>
        </Tabs>
    );
}

