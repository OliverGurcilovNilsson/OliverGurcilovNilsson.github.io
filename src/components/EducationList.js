export type EducationItem = {
    institution: string;
    degree: string;
    fieldOfStudy: string;
    startDate: string;
    endDate: string;
    description?: string;
};

export const educationList = [
    {
        institution: 'Stockholm University',
        degree: 'Bachelor of Science',
        fieldOfStudy: 'Computer Science',
        startDate: 'September 2021',
        endDate: 'January 2024',
        description: 'Studied computer science fundamentals, algorithms, and software development practices.',
    },
];


export default educationList;