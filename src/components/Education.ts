export type EducationItem = {
    institution: string;
    degree: string;
    fieldOfStudy: string;
    startDate: string;
    endDate: string;
    description?: string;
};

export const educationList: EducationItem[] = [
    {
        institution: 'University of Macedonia',
        degree: 'Bachelor of Science',
        fieldOfStudy: 'Computer Science',
        startDate: 'September 2016',
        endDate: 'June 2020',
        description: 'Studied computer science fundamentals, algorithms, and software development practices.',
    },
    {
        institution: 'KTH Royal Institute of Technology',
        degree: 'Master of Science',
        fieldOfStudy: 'Software Engineering',
        startDate: 'September 2020',
        endDate: 'June 2022',
        description: 'Focused on advanced software engineering principles and project management.',
    },
];