import FalconApi from '@crowdstrike/foundry-js';
import { createContext, useEffect, useMemo, useState } from 'react';

const FalconApiContext = createContext(null);

function useFalconApiContext() {
  const [isInitialized, setIsInitialized] = useState(false);
  const falcon = useMemo(() => new FalconApi(), []);
  const navigation = useMemo(() => isInitialized ? falcon.navigation : undefined, [isInitialized]);

  useEffect(() => {
    (async () => {
      await falcon.connect();

      setIsInitialized(true);
    })();
  }, []);

  return { falcon, navigation, isInitialized };
}

export { useFalconApiContext, FalconApiContext };