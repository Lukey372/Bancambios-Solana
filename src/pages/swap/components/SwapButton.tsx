import React, { useEffect, useState } from 'react';
// eslint-disable-next-line import/no-unresolved
import { useMarket, useOnSwap, useSwapContext, useTokenMap } from '@serum/swap-ui';
import { Box } from '@mui/material';
import { useRouteVerbose } from '@serum/swap-ui/lib/context/Dex';
import { useWallet } from '../../../components/wallet/wallet';
import ButtonComponent from '../../../srm-components/Button/Button';
import WalletConnectSwap from '../../../components/wallet/WalletConnectSwap';
import BodyText from '../../../components/typography/BodyText';

interface SwapButtonProps {
  checkingEcoContributionPossibility: () => Promise<void>;
}

const SwapButton: React.FC<SwapButtonProps> = ({ checkingEcoContributionPossibility }) => {
  const { canSwap } = useOnSwap();
  const { fromMint, toMint, fromAmount } = useSwapContext();
  const { connected } = useWallet();
  const tokenMap = useTokenMap();
  const fromTokenInfo = tokenMap.get(fromMint.toString());
  const route = useRouteVerbose(fromMint, toMint);
  const fromMarket = useMarket(route && route.markets ? route.markets[0] : undefined);
  const [errorText, setErrorText] = useState<string>('');
  const [warningText, setWarningText] = useState<string>('');

  useEffect(() => {
    if (
      fromTokenInfo?.symbol &&
      fromMarket?.minOrderSize &&
      fromAmount > 0 &&
      fromAmount < fromMarket?.minOrderSize
    ) {
      setErrorText(
        `${fromTokenInfo?.symbol} amount less than the min order size '${fromMarket?.minOrderSize}'`,
      );
    } else {
      setErrorText('');
    }
  }, [fromMarket?.minOrderSize, fromAmount, fromTokenInfo?.symbol]);

  useEffect(() => {
    if (fromTokenInfo?.symbol === 'SOL') {
      setWarningText(
        'Unfortunately, it is not possible to make an eco-contribution when exchanging SOL.',
      );
    } else {
      setWarningText('');
    }
  }, [fromTokenInfo?.symbol]);

  if (connected) {
    return (
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {errorText ? <BodyText style={{ color: 'red' }} text={errorText} /> : null}
        {warningText ? <BodyText style={{ color: 'yellow' }} text={warningText} /> : null}
        <ButtonComponent
          type={'swap'}
          title={'Swap'}
          onClick={checkingEcoContributionPossibility}
          disable={!canSwap}
          isIconVisible={false}
        />
      </Box>
    );
  } else {
    return <WalletConnectSwap />;
  }
};

export default SwapButton;
