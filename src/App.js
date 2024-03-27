import { createSignal } from 'solid-js';
import cvData from './data.json'; // Make sure this is the correct path to your JSON data

// Inline CSS
const styles = {
  container: {
    fontFamily: `'Open Sans', sans-serif`,
    color: '#333',
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    flexWrap: 'wrap'
  },
  header: {
    textAlign: 'center',
    borderBottom: '1px solid #eee',
    paddingBottom: '20px',
    marginBottom: '20px'
  },
  title: {
    margin: '0',
    color: '#222',
    fontWeight: '700'
  },
  subTitle: {
    color: '#666',
    fontWeight: '300'
  },
  section: {
    marginBottom: '20px'
  },
  sectionTitle: {
    fontSize: '22px',
    borderBottom: '2px solid #333',
    paddingBottom: '5px',
    marginBottom: '10px',
    fontWeight: '600'
  },
  list: {
    listStyleType: 'none',
    padding: '0'
  },
  listItem: {
    marginBottom: '10px'
  },
  skillList: {
    display: 'flex',
    flexWrap: 'wrap',
    listStyleType: 'none',
    padding: '0'
  },
  skill: {
    background: '#f2f2f2',
    borderRadius: '20px',
    padding: '5px 15px',
    marginRight: '10px',
    marginBottom: '10px',
    fontSize: '14px'
  },
  link: {
    color: '#1a0dab',
    textDecoration: 'none'
  }
};

const App = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>{cvData.name}</h1>
        <p style={styles.subTitle}>{cvData.role}</p>
        <p style={styles.subTitle}>{cvData.location}</p>
      </header>
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Skills</h2>
        <ul style={styles.skillList}>
          {cvData.skills.map(skill => (
            <li style={styles.skill} key={skill}>{skill}</li>
          ))}
        </ul>
      </section>
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Contact</h2>
        <p>Email: <a style={styles.link} href={`mailto:${cvData.contact.email}`}>{cvData.contact.email}</a></p>
        <p>Website: <a style={styles.link} href={cvData.contact.website} target="_blank">{cvData.contact.website}</a></p>
      </section>
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Experience</h2>
        <ul style={styles.list}>
          {cvData.experience.map((exp) => (
            <li style={styles.listItem} key={exp.company}>
              <strong>{exp.role}</strong> at {exp.company}, {exp.years}
              <ul>
                {exp.details.map((detail, index) => <li key={index}>{detail}</li>)}
              </ul>
            </li>
          ))}
        </ul>
      </section>
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Education</h2>
        <ul style={styles.list}>
          {cvData.education.map((edu) => (
            <li style={styles.listItem} key={edu.institution}>
              <strong>{edu.degree}</strong> at {edu.institution}, {edu.year}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default App;
