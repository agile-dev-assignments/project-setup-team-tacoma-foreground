import './css/MeetTheTeam.css'
import samplepics from '../img/SampleProfile.png';
import rajPic from '../img/raj_pic.jpeg';
import adamPic from '../img/adam1.PNG'
import alifaPic from '../img/alifa.png'
import mayaPic from '../img/maya.png'

const MeetTheTeam = () => {

    return (
  <div className="MeetTheTeam">
    <section className="TeamCSS">
      <h1>Meet The Team</h1>
          <h2>Raj Bharaj</h2>
          <img alt="Raj" src={rajPic} />  
          <p>
            Senior at NYU CAS majoring in Computer Science, with minors in Mathematics, Cybersecurity and 'Web Development and Programming'.
          </p>

          <h2>Alifa Faruk</h2>
          <img alt="Alifa" src={alifaPic} />
          <p>
          Senior at New York University CAS majoring in Computer Science, with a minor in Mathematics.
          </p>

          <h2>Adam Ethan</h2>
          <img alt="Adam" src={adamPic} />
          <p>
           Hello, Im a junior at NYU majoring in Computer Science and minoring in Business Studies.  
          </p>
          <h2>Maya Sijaric</h2>
          <img alt="Maya" src={mayaPic} />
          <p>
           Hello Im Maya Sijaric and I'm a senior majoring in Computer Science and Politics, with a minor in Molecular and Cell Biology. 
          </p>
          <h2>Roman Haberli</h2>
          <img alt="Roman" src={samplepics} />
          <p>
           Hello Im Roman Haberli and Im a senior at NYU studying stuff. 
          </p>
      </section>
  </div>
    );
  }
  
  export default MeetTheTeam;
