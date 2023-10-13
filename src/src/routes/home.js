import React, { useContext } from 'react';
import { TabNavigation } from '../components/navigation.js';
import { FalconApiContext } from '../contexts/falcon-api-context.js';
import { SlButton } from '@shoelace-style/shoelace/dist/react';
function Home() {
  const { isInitialized } = useContext(FalconApiContext);


  if (!isInitialized) {
    return 'Loading...';
  }

  return (
    <TabNavigation>
      <div className={`mt-4 space-y-8`} style={{ maxWidth: '800px' }}>
        <SlButton>Hello Foundry 👋</SlButton>
      </div>
    </TabNavigation>
  );
}

export { Home };