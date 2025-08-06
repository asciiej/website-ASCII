import React from 'react';
import styles2 from 'components/Explore/Ebooks/Ebooks.module.css';
import styles from 'components/Explore/Ebooks/EbooksLibrary/EbooksLibrary.module.css';
import { Link } from 'react-router-dom';
import ebooksData from 'data/ebooksData';

function Ebooks() {
  const featuredEbooks = ebooksData.slice(0, 3);
  
  // Função para iniciar download
  const handleDownload = (fileUrl) => {
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = '';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return(
    <div className={styles.libraryContainer}>
      <div className={styles.libraryTitle}>
        <h2>Biblioteca de</h2>
        <h2 className={styles.titleHighlight}>eBooks</h2>
      </div>
      <div className={styles2.linkContainer}>
        <Link to="/Bibliotecaebooks">Ver todos</Link>
      </div>
      <div className={styles.ebooksContainer}>
        {featuredEbooks.map(ebook => (
          <div key={ebook.id} className={styles.ebook}>
            <div className={styles.ebookContent}>
              <img 
                src={ebook.image} 
                alt="Ebook" 
                className={styles.ebookImage} 
              />
              <div className={styles.ebookText}>
                <h1 className={styles.ebookTitle}>{ebook.title}</h1>
                <p className={styles.ebookDescription}>{ebook.description}</p>
                <div className={styles.ebookDownload}>
                  <p>Garanta o seu eBook</p>
                  <button 
                    className={styles.ebookDownloadButton}
                    onClick={() => handleDownload(ebook.file)}
                  >
                    Baixar
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Ebooks;