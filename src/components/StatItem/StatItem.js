import classes from './StatItem.module.css';

const StatItem = ({ stat }) => {
  return (
    <li className={classes._container}>
      <h3 className={classes._header}>{stat.header}</h3>
      <p className={classes._type}>{stat.type}</p>
    </li>
  );
};

export default StatItem;
