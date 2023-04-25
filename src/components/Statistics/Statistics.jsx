import style from './Statistics.module.css';
import clsx from 'clsx';
import {colorPickerItemStatic} from '../../helper/colorPicker';


const Statistics = ({ title, stats }) => {
  return (
    <section className={style.statistics}>
      {title && <h2 className={style.title}>Upload stats</h2>}

      <ul className={style.statList}>

        {stats.map(item => {
          return (
            <li key={item.id} className={clsx(style.item, style[colorPickerItemStatic(item.label)])}>
              <span className={style.label}>{item.label}</span>
              <span className={style.percentage}>{item.percentage}%</span>
            </li>
          );
        })}

      </ul>
    </section>
  );
};

export default Statistics;
