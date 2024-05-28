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
    marginBottom: '10px',
    display: 'flex',
    alignItems: 'center',
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
  },
  avatarContainer: {
    marginRight: '15px',
    flexShrink: 0, // Prevent shrinking
  },
  avatar: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
  },
};

      

const App = () => {
  const calculatePaddingBottom = () => {
    const width = window.innerWidth;
    return `${width * 0.01}px`; // 5% of the window's width
  };

  const avatarStyle = {
    paddingBottom: calculatePaddingBottom(),
    marginRight: "15px",
    flexShrink: 0
  }


  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>{cvData.name}</h1>
        <p style={styles.subTitle}>{cvData.role}</p>
        {/* <p style={styles.subTitle}>{cvData.philosophy}</p> */}
      </header>

      {/* Summary */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Summary</h2>
        <p>
          Results driven Software Engineer with over 5 years of experience and a track record in developing sophisticated Web and Desktop applications. My diverse background includes developing software across various industries such as supply chain management, project management, AI, big pharmacology, and telecommunications. <br></br>
          <br></br>

          I am passionate about learning and thrive in environments that encourage growth and productivity. My professional career has allowed me to work with a wide range of technologies and a source of pride for me is the fact that I have been programming for over <strong>15+ years</strong>, namely since I was 14. <br></br><br></br>


          My expertise lies in <strong>backend development</strong> but I am familiar with FE development and technologies like the base ones (HTML, CSS, JS) and popular frameworks (React, JQuery). 

          <br></br>
          My ideal role is one that fosters an environment of continuous learning and professional development.
        </p>
      </section>

      {/* SKILLS */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Skills</h2>
        <ul style={styles.skillList}>
          {cvData.skills.map(skill => (
            <li style={styles.skill} key={skill}>{skill}</li>
          ))}
        </ul>
      </section>

       {/* Values */}
       <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Values</h2>
        <ul style={styles.skillList}>
          {cvData.values.map(value => (
            <li style={styles.skill} key={value}>{value}</li>
          ))}
        </ul>
      </section>

      {/* CONTACT */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Contact</h2>
        <p>Linkedin: <a style={styles.link} href={cvData.contact.linkedin}  rel="noreferrer" target="_blank">{cvData.contact.linkedin}</a></p>
        <p>Github: <a style={styles.link} href={cvData.contact.github}  rel="noreferrer" target="_blank">{cvData.contact.github}</a></p>
        <p>Email: <a style={styles.link} href={`mailto:${cvData.contact.email}`}>marius.lucian.olariu@gmail.com</a></p>
        <p>Location: <a style={styles.link} href={cvData.contact.location}  rel="noreferrer" target="_blank">London, NW10 </a></p>
        <p>Website: <a style={styles.link} href={cvData.contact.website}  rel="noreferrer" target="_blank">{cvData.contact.website}</a></p>
      </section>


      {/* EXPERIENCE */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Experience</h2>
        <ul style={styles.list}>
          {cvData.experience.map((exp) => (
            <li style={styles.listItem} key={exp.company.name}>
              <strong>{exp.company.role}</strong> at {exp.company.name}, {exp.company.period}
              <p>{exp.company.location}</p>
               <hr></hr> 
              {/* <strong>{exp.project.name}</strong> */}
            
            </li>
          ))}
        </ul>
      </section>

       {/* Recommendations */}
       <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Recommendations</h2>
        <ul style={styles.list}>
          {cvData.recommendations.map((rec) => (
            <li style={styles.listItem} key={rec.name}>
              <div style={styles.avatarContainer}>
                {console.log(rec.photo)}
                <img src={rec.photo} alt={`${rec.name}'s avatar`} style={avatarStyle} />
              </div>
              <div style={styles.textContainer}>
                <h3>
                  <a style={styles.link} href={rec.linkedin}>{rec.name}</a>
                </h3>
                <p>{rec.jobTitle}</p>
                <p>{rec.text}</p>
                <hr />
              </div>
            </li>
          ))}
        </ul>
       </section>

      {/* Education */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Education</h2>
        <ul style={styles.list}>
          {cvData.education.map((edu) => (
            <li style={styles.listItem} key={edu.institution}>
              <strong>{edu.degree}</strong> at {edu.name}, {edu.period}
              <br></br>{edu.location}
              <hr></hr>
            </li>
          ))}
        </ul>
      </section>

    </div>
  );
};

export default App;
