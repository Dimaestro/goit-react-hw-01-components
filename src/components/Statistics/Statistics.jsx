import PropTypes from 'prop-types';
import style from './Statistics.module.css';
import clsx from 'clsx';
import { colorPickerItemStatic } from '../../helper/colorPicker';

const Statistics = ({ title, stats }) => {
  return (
    <section className={style.statistics}>
      {title && <h2 className={style.title}>Upload stats</h2>}

      <ul className={style.statList}>
        {stats.map(({ id, label, percentage }) => {
          return (
            <li
              key={id}
              className={clsx(style.item, style[colorPickerItemStatic(label)])}
            >
              <span className={style.label}>{label}</span>
              <span className={style.percentage}>{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};

export default Statistics;
