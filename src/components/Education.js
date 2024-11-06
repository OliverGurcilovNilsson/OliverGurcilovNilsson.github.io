import React from 'react';
import { educationList } from './EducationList'; // Note the named import here

function Education() {
    return (
        <div>
            <h2>My Education</h2>
            {educationList.map((edu, index) => (
                <div key={index} className="education-item">
                    <h3>{edu.degree} in {edu.fieldOfStudy}</h3>
                    <p>{edu.institution}</p>
                    <p>{edu.startDate} - {edu.endDate}</p>
                    {edu.description && <p>{edu.description}</p>}
                </div>
            ))}
        </div>
    );
}

export default Education;