import React from 'react';
import Checkbox from '../../../FormElements/Checkbox';
export default function NotificationField ({ title, id1, id2, index, name }) {
    return <tr key={index}>
        <td>{title}</td>
        <td>
            <Checkbox name={name} id={id1} value={id1} />
        </td>
        <td>
            <Checkbox name={name} id={id2} value={id1}/>
        </td>
    </tr>
}