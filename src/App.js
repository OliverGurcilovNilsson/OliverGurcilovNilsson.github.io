import './App.css';
import { educationList, EducationItem } from './components/Education';

function App() {
  return (
      <div className="App">
          <header className="App-header">
              <h1>Oliver Gurcilov Nilsson</h1>
              <h2>Education</h2>
              {educationList.map((education: EducationItem, index: number) => (
                  <div key={index} style={{ marginBottom: '20px' }}>
                      <h3>{education.degree} in {education.fieldOfStudy}</h3>
                      <h4>{education.institution}</h4>
                      <p>{education.startDate} - {education.endDate}</p>
                      {education.description && <p>{education.description}</p>}
                  </div>
              ))}
          </header>
      </div>
  );
}

export default App;
