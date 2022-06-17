import { createGlobalStyle } from 'styled-components';


import QuicksandWoff from './Quicksand-VariableFont_wght.woff';
import QuicksandWoff2 from './Quicksand-VariableFont_wght.woff2';
import NotoSansWoff from './NotoSans-Regular.woff';
import NotoSansWoff2 from './NotoSans-Regular.woff2';


export default createGlobalStyle`
   
  
    @font-face {
        font-family: 'Quicksand';
        src: local('Quicksand'), local('Quicksand'),
        url(${QuicksandWoff2}) format('woff2'),
        url(${QuicksandWoff}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
    @font-face {
        font-family: 'NotoSans';
        src: local('NotoSans'), local('NotoSans'),
        url(${NotoSansWoff2}) format('woff2'),
        url(${NotoSansWoff}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
    `