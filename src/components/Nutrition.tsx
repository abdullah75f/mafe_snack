import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Nutrition.css';

interface NutritionData {
  id: number;
  flavor: string;
  calories: string;
  servingSize: string;
  nutrients: {
    name: string;
    value: string;
  }[];
  color: string;
}

const Nutrition: React.FC = () => {
  const [activeFlavor, setActiveFlavor] = useState(1);

  const nutritionData: NutritionData[] = [
    {
      id: 1,
      flavor: "Vanilla",
      calories: "~523.75 kcal",
      servingSize: "Per 125g",
      color: "#F5E6D3",
      nutrients: [
        { name: 'Carbohydrates', value: '46.60%' },
        { name: 'Fat', value: '23.70%' },
        { name: 'Dietary Fiber', value: '1.36%' },
        { name: 'Sugars', value: '7.72%' },
        { name: 'Proteins', value: '5.04%' },
        { name: 'Minerals', value: '0.10%' },
        { name: 'Vitamins', value: '0.05%' }
      ]
    },
    {
      id: 2,
      flavor: "Chocolate",
      calories: "~407 kcal",
      servingSize: "Per 500g",
      color: "#8B4513",
      nutrients: [
        { name: 'Carbohydrates', value: '29.8%' },
        { name: 'Fat', value: '22.6%' },
        { name: 'Dietary Fiber', value: '2.2%' },
        { name: 'Sugars', value: '9.1%' },
        { name: 'Proteins', value: '4.1%' },
        { name: 'Minerals & Vitamins', value: '0.4%' },
        { name: 'Water (Moisture)', value: '14.4%' },
        { name: 'Other (color/flavor etc.)', value: '4.9%' }
      ]
    },
    {
      id: 3,
      flavor: "Cinnamon",
      calories: "~395 kcal",
      servingSize: "Per 250g",
      color: "#D2691E",
      nutrients: [
        { name: 'Carbohydrates', value: '29.7%' },
        { name: 'Fat', value: '22.4%' },
        { name: 'Dietary Fiber', value: '2.4%' },
        { name: 'Sugars', value: '9.0%' },
        { name: 'Proteins', value: '4.1%' },
        { name: 'Minerals & Vitamins', value: '0.4%' },
        { name: 'Water (moisture)', value: '14.6%' },
        { name: 'Other (additives)', value: '6.0%' }
      ]
    }
  ];

  const activeData = nutritionData.find(data => data.id === activeFlavor) || nutritionData[0];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <section id="nutrition" className="nutrition">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Nutritional Information
        </motion.h2>
        
        <motion.div 
          className="nutrition-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Flavor Tabs */}
          <motion.div className="flavor-tabs" variants={itemVariants}>
            {nutritionData.map((flavor) => (
              <motion.button
                key={flavor.id}
                className={`flavor-tab ${activeFlavor === flavor.id ? 'active' : ''}`}
                onClick={() => setActiveFlavor(flavor.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  '--flavor-color': flavor.color
                } as React.CSSProperties}
              >
                {flavor.flavor} Flavor
              </motion.button>
            ))}
          </motion.div>

          {/* Active Flavor Content */}
          <motion.div 
            className="nutrition-details"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div 
              className="calories-info"
              variants={itemVariants}
            >
              <motion.h3
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                🔥 Calories Estimate ({activeData.servingSize})
              </motion.h3>
              <motion.div 
                className="calories-display"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                style={{
                  '--flavor-color': activeData.color
                } as React.CSSProperties}
              >
                <motion.span 
                  className="calories-number"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  {activeData.calories}
                </motion.span>
                <motion.span 
                  className="calories-unit"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  (energy content)
                </motion.span>
              </motion.div>
            </motion.div>
            
            <motion.div className="nutrition-table" variants={itemVariants}>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Nutrient Per 125g Serving % by Weight (of 125g)
              </motion.h3>
              <motion.div 
                className="nutrition-grid"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {activeData.nutrients.map((item, index) => (
                  <motion.div
                    key={index}
                    className="nutrition-item"
                    variants={itemVariants}
                    whileHover={{ 
                      x: 10, 
                      backgroundColor: activeData.color + '20',
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="nutrient-name">{item.name}</span>
                    <motion.span 
                      className="nutrient-value"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                      style={{ color: activeData.color }}
                    >
                      {item.value}
                    </motion.span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Nutrition; 