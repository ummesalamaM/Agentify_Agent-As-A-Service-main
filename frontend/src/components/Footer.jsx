function Footer() {
  // Add instagram / linkedin / github links later. Icons only show when a link is filled in.
  const teamMembers = [
    {
      name: 'Ummesalama Mahuvawala',
      instagram: 'https://www.instagram.com/ummesalamaa___?rpxt=aWxvdzZidW1tMWJv',
      linkedin: 'https://www.linkedin.com/in/ummesalama-m?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
      github: 'https://github.com/ummesalamaM'
    },
    {
      name: 'Manas Borkar',
      instagram: 'https://www.instagram.com/justt__manass?exln=Mmh3NWF1N2hqaWE%3D&utm_source=qr',
      linkedin: 'https://www.linkedin.com/in/manas-borkar-b2997121b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
      github: 'https://github.com/SolvingSyntax'
    },
    {
      name: 'Chaitanya Bhosale',
      instagram: 'https://www.instagram.com/_chaitanya.bhosale_?psln=Mnl5eDkyamV5OGZl',
      linkedin: '',
      github: ''
    }
  ];

  return (
    <footer className="footer" id="about">
      <div className="footer-content">
        <div className="team-section">
          <h3 className="team-title">Created by</h3>
          <div className="team-members">
            {teamMembers.map((member, index) => (
              <div key={index} className="member">
                <span className="member-name">{member.name}</span>

                {(member.instagram || member.linkedin || member.github) && (
                  <div className="social-links">
                    {member.instagram && (
                      <a href={member.instagram} target="_blank" rel="noopener noreferrer" className="social-icon">
                        <i className="fab fa-instagram"></i>
                      </a>
                    )}
                    {member.linkedin && (
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    )}
                    {member.github && (
                      <a href={member.github} target="_blank" rel="noopener noreferrer" className="social-icon">
                        <i className="fab fa-github"></i>
                      </a>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mentor">Mentor: Mrs. Srushti Jadhav</div>
        <div className="footer-divider"></div>
        <p className="footer-copyright">&copy; 2026 Agentify. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;