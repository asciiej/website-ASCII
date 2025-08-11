import React from 'react';
import Typewriter from 'typewriter-effect';
import styles from './ASCIIAbout.module.css';

function ASCIIAbout() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h2 className={styles.title}>ABOUT</h2>
        </div>
        
        <div className={styles.mainText}>
          <div className={`${styles.typewriterContainer} typewriter-green`}>
            <Typewriter
              options={{
                strings: [
                  'LOREM IPSUM DOLOR SIT AMET NSECTET.',
                  'LOREM MASSA VESTIBULUM ORNARE',
                  'PURUS SIT.'
                ],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50,
                pauseFor: 2000,
              }}
            />
          </div>
        </div>

        <div className={styles.paragraphs}>
          <div className={styles.paragraphColumn}>
            <p>
              Lorem ipsum dolor sit amet consectetur. Aliquam integer 
              elementum ornare turpis pretium. Duis amet tellus aliquam 
              fames diam justo integer elementum. Sed suspendisse 
              consequat hendrerit viverra ut. Pellentesque vitae enim 
              eget volutpat congue accumsan.
            </p>
          </div>
          
          <div className={styles.paragraphColumn}>
            <p>
              Lorem ipsum dolor sit amet consectetur. Aliquam integer 
              elementum ornare turpis pretium. Duis amet tellus aliquam 
              fames diam justo integer elementum. Sed suspendisse 
              consequat hendrerit viverra ut. Pellentesque vitae enim 
              eget volutpat congue accumsan.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ASCIIAbout;