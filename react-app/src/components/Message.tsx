import * as React from 'react';
import "./Message.css"

interface Props {
    name?: string;
}

const Message: React.SFC<Props> = (props: Props) => (
    <h1 className="Message-color">My app name: {props.name}</h1>
);

Message.defaultProps = {
    name: 'React',
};

export default Message;
