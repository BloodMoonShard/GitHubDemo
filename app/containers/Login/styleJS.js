const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  valueItem: {
    width: '86px',
  },
  headerChart: {
    fontSize: '0.9rem',
    color: theme.palette.primary.dark,
    fontFamily: 'Roboto'
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
  }
});

export default styles;
