import React from 'react';
import Checkbox from '../../../FormElements/Checkbox';
export default function NotificationField ({ 
    title, id1, id2, index, name, values, arrayHelpers,
}) {
    return <tr key={index}>
        <td>{title}</td>
        <td>
            <Checkbox 
                name={name} 
                id={id1} 
                value={id1} 
                checked={values.notifications.includes(id1)}
                onChange={e => {
                    if (e.target.checked) arrayHelpers.push(id1);
                    else {
                      const idx = values.notifications.indexOf(id1);
                      arrayHelpers.remove(idx);
                    }
                }}
            />
        </td>
        <td>
        <Checkbox 
                name={name} 
                id={id2} 
                value={id2} 
                checked={values.notifications.includes(id2)}
                onChange={e => {
                    if (e.target.checked) arrayHelpers.push(id2);
                    else {
                      const idx = values.notifications.indexOf(id2);
                      arrayHelpers.remove(idx);
                    }
                }}
            />
        </td>
    </tr>
}