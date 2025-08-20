import React from 'react';
import Typewriter from 'typewriter-effect';
import styles from './ASCIIAbout.module.css';

function ASCIIAbout() {
  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <h2 className={styles.title}>ABOUT</h2>
      </div>
      
      <div className={styles.rightSide}>
        <div className={styles.mainText}>
          <div className={`${styles.typewriterContainer} typewriter-green`}>
            <Typewriter // sem loop e 
              onInit={(typewriter) => {
                typewriter
                  .typeString('Lorem ipsum dolor sit amet nsectet. Lorem massa vestibulum ornare purus sit.')
                  .start();
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