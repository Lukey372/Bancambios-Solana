import Wallet from '@project-serum/sol-wallet-adapter';
import { notify } from '../../srm-utils/notifications';

export function SolletExtensionAdapter(_, network) {
  const sollet = (window as any).sollet;
  if (sollet) {
    return new Wallet(sollet, network);
  }

  return {
    on: () => {},
    connect: () => {
      notify({
        type: 'error',
        message: 'Connect wallet failed!',
        description: 'Please install the Sollet Extension for Chrome',
      });
    },
  };
}
