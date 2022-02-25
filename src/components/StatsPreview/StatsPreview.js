import classes from './StatsPreview.module.css';
import StatItem from '../StatItem/StatItem';

const statArray = [
  {
    header: '10k+',
    type: 'companies',
  },
  {
    header: '314',
    type: 'templates',
  },
  {
    header: '12M+',
    type: 'queries',
  },
];

const StatsPreview = () => {
  return (
    <section className={classes._container}>
      <div className={classes._image}></div>
      <div className={classes._contentContainer}>
        <h2 className={classes._title}>
          Get <span className={classes._titleEmphasis}>insights</span> that help
          your business grow.
        </h2>
        <p className={classes._text}>
          Discover the benefits of data analytics and make better decisions
          regarding revenue, customer experience, and overall efficiency.
        </p>
        <ul className={classes._statsContainer}>
          {statArray.map((statItem, index) => (
            <StatItem key={index} stat={statItem} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default StatsPreview;
