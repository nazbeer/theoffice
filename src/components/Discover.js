

import React from 'react';
import MaskGroupImage from './images/Component1_Mask_group_1.png';
import MaskGroup1Image from './images/Component1_Mask_group_1.png';
import { styled } from '@mui/material/styles';

const Component11 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: '100%',
  height: `376px`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
});

const ForTeamsOf120WeHaveD = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Plus Jakarta Sans`,
  fontWeight: `400`,
  fontSize: `30px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `42px`,
  textTransform: `none`,
  width: `749px`,
  position: `absolute`,
  left: `296px`,
  top: `200px`,
});

const DiscoverPremiumWorks = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Plus Jakarta Sans`,
  fontWeight: `700`,
  fontSize: `50px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `60px`,
  textTransform: `none`,
  width: `756px`,
  height: `117.53px`,
  position: `absolute`,
  left: `294px`,
  top: `35px`,
});

const MaskGroup = styled('img')({
  height: `266px`,
  width: `259px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const MaskGroup1 = styled('img')({
  height: `207px`,
  width: `215px`,
  position: `absolute`,
  left: `1159px`,
  top: `169px`,
});

function Discover(props) {
  return (
    <Component11 className={props.className}>
      <ForTeamsOf120WeHaveD>
        {`For teams of 1-20, we have designed our space to motivate, inspire and boost creativity. `}
      </ForTeamsOf120WeHaveD>
      <DiscoverPremiumWorks>
        {`Discover premium workspaces for your business to grow.`}
      </DiscoverPremiumWorks>
      <MaskGroup src={MaskGroupImage} loading="lazy" alt={'Mask group'} />
      <MaskGroup1 src={MaskGroup1Image} loading="lazy" alt={'Mask group'} />
    </Component11>
  );
}

export default Discover;
