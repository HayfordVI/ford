// components/ImageGallery.js
import { motion } from 'framer-motion';
import styles from './ImageGallery.module.css';

const images = [
  '/images/image1.jpg',
  '/images/image2.jpg',
  '/images/image3.jpg',
  '/images/image4.jpg',
  // Add more image paths here
];

const ImageGallery = () => {
  return (
    <div className={styles.galleryContainer}>
      <motion.div
        className={styles.imageWrapper}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        {images.map((image, index) => (
          <motion.div
            key={index}
            className={styles.imageCard}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.img
              src={image}
              alt={`Gallery Image ${index + 1}`}
              className={styles.image}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ImageGallery;
