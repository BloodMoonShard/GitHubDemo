const drawerWidth = 240;

const styles = theme => ({
  '@global': {
    body: {
      fontFamily: 'Roboto',
    }
  },
  root: {
    display: 'flex',
    backgroundColor: '#fff',
    fontFamily: 'Roboto',
  },
  toolbar: {},
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: '0 0',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    boxShadow: 'none',
    backgroundColor: 'white',
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    color: 'rgba(0, 0, 0, 0.54)',
    padding: '8px',
  },
  menuButtonHidden: {
    display: 'none',
  },
  toolbarHidden: {
    padding: '0 18px',
  },
  title: {
    flexGrow: 1,
  },
  menuList: {
    paddingTop: 0,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: '40px',
    [theme.breakpoints.up('sm')]: {
      width: '40px',
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: '1.2rem',
    boxSizing: 'border-box',
    marginTop: 64,
    overflow: 'auto',
  },
  chartContainer: {
    marginLeft: -22,
  },
  tableContainer: {
    height: 320,
  },
  h5: {
    marginBottom: theme.spacing.unit * 2,
  },
  logoSvg: {
    minWidth: '5em',
  }
});

export default styles;
