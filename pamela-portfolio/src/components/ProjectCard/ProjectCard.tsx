// src/components/ProjectCard/ProjectCard.tsx
import React from 'react';
import styles from './ProjectCard.module.scss';

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  imageUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, link, imageUrl }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className={styles.card}>
      <img src={imageUrl} alt={title} className={styles.image} />
      <div className={styles.content}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </a>
  );
};

export default ProjectCard;
