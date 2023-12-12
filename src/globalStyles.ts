import { createGlobalStyle} from "styled-components"
export const GlobalStyles = createGlobalStyle`
  *, ::after, ::before {
    box-sizing: border-box;
  }
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }

  .container{
    
    @media (min-width: 576px) {
        max-width: 540px;
    }

    @media (min-width: 768px) {
      max-width: 720px;
    }

    @media (min-width: 992px) {
      max-width: 960px;
    }

    @media (min-width: 1200px) {
        
      max-width: 1140px;
    }

    @media (min-width: 1400px) {
      max-width: 1320px;
    }

    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }

  .row {
    display: flex;
    flex-wrap: wrap;
  }

  .row > * {
    flex-shrink: 0;
    width: 100%;
    max-width: 100%;
  }  

  .col {
    flex: 1 0 0%;
  }

  .col-12 {
    flex: 0 0 auto;
    width: 100%;
  }

  @media (min-width: 768px) {
    .col-md-6 {
      flex: 0 0 auto;
      width: 50%;
    }
  }
  

  @media (min-width: 992px) {
    .col-lg-3 {
      flex: 0 0 auto;
      width: 25%;
    }
  }
  
  
  .text-center {
    text-align: center !important;
  }

  @media (min-width: 576px) {
    .text-sm-end {
      text-align: right !important;
    }
  }
  
  .justify-content-center {
    justify-content: center !important;
  }

  .justify-content-end {
    justify-content: flex-end !important;
  }

  @media (min-width: 576px) {
    .justify-content-sm-start {
      justify-content: flex-start !important;
    }
  }

  .m-0 {
    margin: 0 !important;
  }

  .d-flex {
    display: flex !important;
  }

  .position-relative {
    position: relative !important;
  }

  .text-end {
    text-align: right !important;
  }

  .my-3 {
    margin-top: 1rem !important;
    margin-bottom: 1rem !important;
  }

  .my-4 {
    margin-top: 1.5rem !important;
    margin-bottom: 1.5rem !important;
  }

  .p-0 {
    padding: 0 !important;
  }
`
