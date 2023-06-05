import styles from './Footer.module.css'

const Footer = () => {
    const data = new Date();
    const ano = data. getFullYear();
  return (
    <footer className={styles.footer}>
        <h3>Escreva sobre o que você tem interesse!</h3>
        <p>Mini Blog &copy; {ano}</p>
    </footer>
  )
}

export default Footer