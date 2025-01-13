import React, { useEffect, useState } from 'react';
import { getPortfolioItems } from '../services/api';

interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

const Portfolio: React.FC = () => {
  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([]);

  useEffect(() => {
    getPortfolioItems().then(setPortfolioItems);
  }, []);

  return (
    <section className="section">
      <h2>My Designs</h2>
      <div className="portfolio-grid">
        {portfolioItems.map((item) => (
          <div key={item.id} className="portfolio-item">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <img src={item.imageUrl} alt={item.title} width="200px" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
