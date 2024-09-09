import styles from './Servico.module.css';
import { FaCode, FaProjectDiagram, FaChalkboardTeacher, FaChartBar, FaClipboardList } from 'react-icons/fa';
import servicos from 'json/servicos.json';

const icones = {
    FaCode: <FaCode />,
    FaProjectDiagram: <FaProjectDiagram />,
    FaChalkboardTeacher: <FaChalkboardTeacher />,
    FaChartBar: <FaChartBar />,
    FaClipboardList: <FaClipboardList />
};

export default function Servicos() {
    return (
        <section className={styles.servicos}>
            <h2>Serviços</h2>
            <div className={styles.servicosContainer}>
                {servicos.map((servico) => (
                    <div key={servico.id} className={styles.servico}>
                        <div className={styles.icone}>{icones[servico.icone]}</div>
                        <h4>{servico.titulo}</h4>
                        {servico.resumo}
                    </div>
                ))}
            </div>
        </section>
    );
}