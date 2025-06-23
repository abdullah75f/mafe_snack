import React from 'react';
import { motion } from 'framer-motion';
import { FaBreadSlice, FaStar } from 'react-icons/fa6';
import './Hero.css';

interface Product {
  id: number;
  name: string;
  flavor: string;
  amharicName: string;
  calories: string;
  servingSize: string;
  description: string;
  color: string;
}

const Hero: React.FC = () => {
  const products: Product[] = [
    {
      id: 1,
      name: "Vanilla",
      flavor: "Vanilla Flavor",
      amharicName: "ዳቦ ቆሎ",
      calories: "~523.75 kcal",
      servingSize: "Per 125g",
      description: "Classic vanilla taste with traditional Ethiopian recipe",
      color: "#F5E6D3"
    },
    {
      id: 2,
      name: "Chocolate",
      flavor: "Chocolate Flavor", 
      amharicName: "ዳቦ ቆሎ",
      calories: "~407 kcal",
      servingSize: "Per 500g",
      description: "Rich chocolate flavor with authentic Ethiopian ingredients",
      color: "#8B4513"
    },
    {
      id: 3,
      name: "Cinnamon",
      flavor: "Cinnamon Flavor",
      amharicName: "ዳቦ ቆሎ", 
      calories: "~395 kcal",
      servingSize: "Per 250g",
      description: "Warm cinnamon spice with traditional Ethiopian taste",
      color: "#D2691E"
    }
  ];

  const handleOrderNow = (productId: number) => {
    console.log(`Order Now clicked for product ${productId}`);
  };

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <motion.div 
          className="hero-header"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Mafe Snack's ዳቦ ቆሎ
            <span className="subtitle">Ethiopian Traditional Snacks</span>
          </motion.h1>
          
          <motion.p 
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Ethiopian Snack's: Taste the Tradition!
            <br />
            <span className="amharic-text">የኢትዮጵያ ስንቅ፡ ባህሎን ይቅመሱ፡</span>
          </motion.p>
        </motion.div>

        <motion.div 
          className="products-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="product-card"
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              style={{ 
                '--product-color': product.color 
              } as React.CSSProperties}
            >
              <motion.div 
                className="product-image"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                style={{ backgroundColor: product.color }}
              >
                {FaBreadSlice({ size: 48 }) as React.ReactElement}
                <div className="flavor-badge">{product.name}</div>
              </motion.div>
              
              <div className="product-info">
                <h3 className="product-name">{product.amharicName}</h3>
                <p className="product-flavor">{product.flavor}</p>
                <p className="product-description">{product.description}</p>
                
                <div className="product-stats">
                  <div className="calories">
                    <span className="calories-icon">🔥</span>
                    <span className="calories-text">{product.calories}</span>
                    <span className="serving-size">{product.servingSize}</span>
                  </div>
                </div>

                <motion.button 
                  className="btn btn-primary order-btn"
                  onClick={() => handleOrderNow(product.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Order Now
                </motion.button>
              </div>

              <motion.div 
                className="product-rating"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                {FaStar({ className: "star-icon" }) as React.ReactElement}
                {FaStar({ className: "star-icon" }) as React.ReactElement}
                {FaStar({ className: "star-icon" }) as React.ReactElement}
                {FaStar({ className: "star-icon" }) as React.ReactElement}
                {FaStar({ className: "star-icon" }) as React.ReactElement}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="hero-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.button 
            className="btn btn-secondary"
            onClick={() => document.getElementById('nutrition')?.scrollIntoView({ behavior: 'smooth' })}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            View Nutrition Info
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 