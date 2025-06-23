import React from 'react';
import { motion } from 'framer-motion';
import './Footer.css';

const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const footerSections = [
    {
      title: 'Mafe Snack\'s',
      content: (
        <p className="amharic-text">የኢትዮጵያ ስንቅ፡ ባህሎን ይቅመሱ፡</p>
      )
    },
    {
      title: 'Quick Links',
      content: (
        <>
          <motion.a 
            href="#home" 
            onClick={() => scrollToSection('home')}
            whileHover={{ x: 5, color: 'var(--accent-color)' }}
            transition={{ duration: 0.2 }}
          >
            Home
          </motion.a>
          <motion.a 
            href="#about" 
            onClick={() => scrollToSection('about')}
            whileHover={{ x: 5, color: 'var(--accent-color)' }}
            transition={{ duration: 0.2 }}
          >
            About
          </motion.a>
          <motion.a 
            href="#nutrition" 
            onClick={() => scrollToSection('nutrition')}
            whileHover={{ x: 5, color: 'var(--accent-color)' }}
            transition={{ duration: 0.2 }}
          >
            Nutrition
          </motion.a>
          <motion.a 
            href="#contact" 
            onClick={() => scrollToSection('contact')}
            whileHover={{ x: 5, color: 'var(--accent-color)' }}
            transition={{ duration: 0.2 }}
          >
            Contact
          </motion.a>
        </>
      )
    },
    {
      title: 'Contact Info',
      content: (
        <>
          <p>📞 +251-990663078</p>
          <p>✉️ info@mafegeneralbusiness.com</p>
        </>
      )
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <motion.div 
          className="footer-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {footerSections.map((section, index) => (
            <motion.div 
              key={index}
              className="footer-section"
              variants={itemVariants}
            >
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {section.title}
              </motion.h3>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.1 }}
                viewport={{ once: true }}
              >
                {section.content}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="footer-bottom"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p>&copy; 2024 Mafe Snack's Food Manufacturing. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 