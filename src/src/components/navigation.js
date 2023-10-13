import React, { useCallback, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { FalconApiContext } from '../contexts/falcon-api-context.js';
import { SlTab, SlTabGroup, SlTabPanel } from '@shoelace-style/shoelace/dist/react';

function TabNavigation({ children }) {
  const location = useLocation();
  const { navigation} = useContext(FalconApiContext);

  const doNavigate = useCallback((name) => {
    switch(name) {
      case 'home': return navigation.navigateTo({ path: '/' });
    }
  }, [navigation]);

  return (
    <SlTabGroup onSlTabShow={(event) => doNavigate(event.detail.name)}>
      <SlTab slot="nav" active={location.pathname === '/'} panel="home" >
        Home
      </SlTab>

      <SlTabPanel name="home">{children}</SlTabPanel>
    </SlTabGroup>
  );
}

export { TabNavigation }