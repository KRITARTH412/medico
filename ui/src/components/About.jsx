import React from 'react';
import { Container, Typography } from '@mui/material';

const AboutUs = () => {
  return (
    <Container maxWidth="lg" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
      <div style={{ marginBottom: '3rem' }}>
        <Typography variant="h3" gutterBottom>About Us</Typography>
        <Typography variant="body1" paragraph>
          At [Your Medical Website Name], we are committed to revolutionizing healthcare by providing accessible, affordable, and high-quality healthcare solutions to everyone, everywhere. With a dedicated team of healthcare professionals, cutting-edge technology, and a patient-centric approach, we strive to empower individuals to take control of their health and well-being.
        </Typography>
      </div>
      <div style={{ marginBottom: '3rem' }}>
        <Typography variant="h4" gutterBottom>Our Story</Typography>
        <Typography variant="body1" paragraph>
          [Your Medical Website Name] was founded with a vision to [share the story behind the inception of your website, including any personal experiences or motivations that inspired its creation]. What started as a passion project has now evolved into a leading platform that connects patients with healthcare providers, offers comprehensive health information, and facilitates seamless access to healthcare services.
        </Typography>
      </div>
      <div style={{ marginBottom: '3rem' }}>
        <Typography variant="h4" gutterBottom>Our Mission</Typography>
        <Typography variant="body1" paragraph>
          At [Your Medical Website Name], our mission is to [state your mission clearly, emphasizing the impact you aim to make in the healthcare industry and the lives of your users]. Whether it's providing reliable health information, connecting patients with trusted healthcare professionals, or promoting preventive care, we are dedicated to making a positive difference in the lives of millions.
        </Typography>
      </div>
      <div style={{ marginBottom: '3rem' }}>
        <Typography variant="h4" gutterBottom>Our Values</Typography>
        <Typography variant="body1" paragraph>
          <ul>
            <li><strong>Integrity:</strong> We uphold the highest ethical standards in everything we do, ensuring transparency, honesty, and trustworthiness in all our interactions.</li>
            <li><strong>Excellence:</strong> We are committed to delivering excellence in healthcare services, continually striving for improvement and innovation to meet the evolving needs of our users.</li>
            <li><strong>Empathy:</strong> We understand that healthcare is deeply personal, and we approach every interaction with empathy, compassion, and sensitivity to the needs of our users.</li>
            <li><strong>Accessibility:</strong> We believe that everyone deserves access to quality healthcare, regardless of their background, location, or financial status. We are dedicated to making healthcare services accessible and affordable for all.</li>
          </ul>
        </Typography>
      </div>
      <div style={{ marginBottom: '3rem' }}>
        <Typography variant="h4" gutterBottom>Meet Our Team</Typography>
        <Typography variant="body1" paragraph>
          [Include brief profiles and photos of key team members, highlighting their expertise, experience, and contributions to the success of your website. This adds a human touch and helps users connect with the people behind the platform.]
        </Typography>
      </div>
      <div>
        <Typography variant="h4" gutterBottom>Contact Us</Typography>
        <Typography variant="body1" paragraph>
          [Provide contact information, including email addresses, phone numbers, and physical addresses if applicable. Encourage users to reach out with any questions, feedback, or inquiries.]
        </Typography>
      </div>
    </Container>
  );
};

export default AboutUs;
