import Calendar from 'react-calendar'
import React, { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import {Link} from 'react-router-dom';

function Schedule () {
    const [value, onChange] = useState(new Date())

    return(
        <div>
            <Calendar onChange={onChange}
                    value={value}/>
        </div>
        );
}

export default Schedule;