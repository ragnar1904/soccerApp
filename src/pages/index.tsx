import { NextPage } from 'next';
import React from 'react';

import { Player } from '../components/Player';
import { StyledToggle } from '../components/Toggle';
import { Field } from '../containers/Field';
import { pageContext, useIndexContext } from '../contexts';
import { Layout } from '../layouts';
import { FlexCenter } from '../layouts/FlexCenter';

const Index: NextPage = () => {
  const pageCtx = useIndexContext();
  return (
    <pageContext.Provider value={pageCtx}>
      <Layout>
        <FlexCenter direction="column">
          <Field field={pageCtx.field} />
        </FlexCenter>
        <FlexCenter>
          <StyledToggle />
          <Player />
        </FlexCenter>
      </Layout>
    </pageContext.Provider>
  );
};

export default Index;
