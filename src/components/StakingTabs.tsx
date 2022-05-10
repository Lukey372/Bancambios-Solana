import { useHistory, useLocation } from 'react-router';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { makeStyles } from '@mui/styles';

const ALLOWED_PATHES = ['/swap', '/liquidity'];

const useStyles = makeStyles(() => ({
  tabs: {
    width: '283px',
    background: '#202124',
    borderRadius: '12px',
    marginBottom: '20px',
    boxShadow: '0px 0px 12.0059px 12.0059px rgba(0, 0, 0, 0.5)',
  },
  tab: {
    '&&': {
      width: '50%',
      textTransform: 'none',
      color: '#BDC1C6',
      fontSize: '24px',
      fontWeight: '700',
      fontFamily: 'Saira',
      borderRadius: '8px',
    },
  },
  active: {
    '&&&': {
      width: '50%',
      color: '#fff',
      background: 'linear-gradient(267.38deg, #EC26F5 5.63%, #9F5AE5 107.42%)',
    },
  },
}));

export const StakingTabs = () => {
  //   const [value, setValue] = useState(getPrefixedPath(tab));
  const history = useHistory();
  const location = useLocation();
  const styles = useStyles();
  const path = location.pathname;

  if (!ALLOWED_PATHES.includes(path)) {
    return null;
  }

  const handleChange = (_: any, value: any) => {
    history.push(value);
  };

  return (
    <Tabs
      value={path}
      onChange={handleChange}
      className={styles.tabs}
      TabIndicatorProps={{ style: { background: 'none' } }}
    >
      <Tab
        label="Swap"
        value="/swap"
        className={`${styles.tab} ${path === '/swap' && styles.active}`}
      />
      <Tab
        label="Liquidity"
        value="/liquidity"
        className={`${styles.tab} ${path === '/liquidity' && styles.active}`}
      />
    </Tabs>
  );
};
