import React from 'react';
import styles from 'components/EbooksLibrary/EbooksLibrary.module.css';
import ebooksData from 'data/ebooksData';

function EbooksLibrary() {
  // Função para iniciar download (mesma lógica)
  const handleDownload = (fileUrl) => {
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = '';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div id="Bibliotecaebooks-anchor"></div>
      <div className={styles.libraryContainer}>
        <div className={styles.ebooksContainer}>
          {ebooksData.map(ebook => (
            <div key={ebook.id} className={styles.ebook}>
              <div className={styles.ebookContent}>
                <img 
                  src={ebook.image} 
                  alt="Ebook" 
                  className={styles.ebookImage} 
                />
                <div className={styles.ebookText}>
                  <h3 className={styles.ebookTitle}>{ebook.title}</h3>
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
    </>
  );
}

export default EbooksLibrary;