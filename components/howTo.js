import styles from '../styles/Sections.module.css';

export default function HowTo() {
  return (
    <section id="how-to">
      <div className={styles.howTo}>
        <div className={styles.container}>
          <h2>Simple install...</h2>
          <p>
            Add our overlays and graphics to your stream in just a few clicks!
          </p>
        </div>
      </div>
    </section>
  );
}
