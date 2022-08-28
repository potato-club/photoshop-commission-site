import { keyframes } from 'styled-components';

export const NoneFrame = keyframes`
  from{
    position: relative;
        right: 1000px;
  }
  to{
    position: relative;
        right: 1000px;
  }
`;
export const HeaderTextFrame = keyframes`
    from{
        position: relative;
        right: 1000px;
    }
    to{
        position:relative;
        right: 0px;
    }
  `;
export const HeaderImgFrame = keyframes`
  0%{
    position: relative;
    top:100px;
    opacity: 0;
  }
  100%{
    opacity: 1;
    position:relative;
    top:0px;
  }
  `;

export const SectionImgFrame = keyframes`
    0%{
        position: relative;
        top: 350px;
        opacity: 0;
    }
    100%{
        position:relative;
        top: 0px;
        opacity: 1;
    }
  `;
export const SectionTextFrame = keyframes`
  0%{
      position: relative;
      left: 1000px;
  }
  100%{
      position:relative;
      left: 0px;
  }
`;
export const FooterImgFrame = keyframes`
    0%{
        position: relative;
        top: 180px;
        right: 120px;
        opacity: 0;
    }
    100%{
        position: relative;
        top: 0px;
        right: 0px;
        opacity: 1;
    }
  `;
export const FooterTextFrame = keyframes`
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
    `;
