import styles from  './PostModelo.modulo.css';

export default function PostModelo({ children, fotoCapa, titulo }) {
  return (
      <article className={styles.postModeloContainer}>          

          <h2 className={styles.titulo}>
              {titulo}
          </h2>

          <div className={styles.postConteudoContainer}>
              {children}
          </div>
      </article>
  )
}