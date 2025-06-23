import React from 'react';
import { motion } from 'framer-motion';
import { FaBox, FaSnowflake } from 'react-icons/fa6';
import './Storage.css';

interface StorageItem {
  id: number;
  iconType: 'box' | 'snowflake';
  title: string;
  amharicText: string;
}

const Storage: React.FC = () => {
  const storageItems: StorageItem[] = [
    {
      id: 1,
      iconType: 'box',
      title: '📦 Packed in a protective atmosphere',
      amharicText: 'ጥንቃቄ በተሞላበት ሁኔታ የታሸገ'
    },
    {
      id: 2,
      iconType: 'snowflake',
      title: '🌡️ Store in a cool and dry place',
      amharicText: 'በቀዝቃዛ እና ደረቅ ቦታ ይቀመጥ'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const getIcon = (iconType: string) => {
    switch (iconType) {
      case 'box':
        return FaBox({ size: 24 }) as React.ReactElement;
      case 'snowflake':
        return FaSnowflake({ size: 24 }) as React.ReactElement;
      default:
        return FaBox({ size: 24 }) as React.ReactElement;
    }
  };

  return (
    <section id="storage" className="storage">
      <div className="container">
        <motion.div 
          className="storage-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {storageItems.map((item) => (
            <motion.div
              key={item.id}
              className="storage-item"
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                boxShadow: '0 8px 30px rgba(139, 69, 19, 0.15)',
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div 
                className="storage-icon"
                whileHover={{ 
                  scale: 1.1,
                  rotate: 360,
                  transition: { duration: 0.6 }
                }}
              >
                {getIcon(item.iconType)}
              </motion.div>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {item.title}
              </motion.h3>
              <motion.p 
                className="amharic-text"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                {item.amharicText}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Storage; 