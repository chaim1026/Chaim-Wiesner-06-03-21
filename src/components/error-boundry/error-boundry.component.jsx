import React from 'react';
import { ErrorImageOverlay, ErrorImageContainer, ErrorImageText } from './error-boundry.styles';

class ErrorBoundry extends React.Component {
    constructor(props) {
        super();

        this.state = {
            hasError: false
        }
    }
   static getDerivedStateFromError(error) {
        // process the error 
        return {hasError: true };
   }

   componentDidCatch(error, info) {
       console.log(error);
   }

   render() {
       if (this.state.hasError) {
           return (
               <ErrorImageOverlay>
                   <ErrorImageContainer imageUrl='https://i.imgur.com/qIufhof.png' />
                   <ErrorImageText>
                       Caution! This Page is Cordoned Off
                   </ErrorImageText>
               </ErrorImageOverlay>
           );
       }

       return this.props.children
   }
}

export default ErrorBoundry;