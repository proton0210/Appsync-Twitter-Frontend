import {
  REGION,
  REACT_APP_USER_POOL_ID,
  REACT_APP_USER_POOL_CLIENT_ID,
  REACT_APP_APPSYNC_API
} from './../variables';
// Configure your AWS resources here
const awsconfig = {
  Auth: {
    region: REGION,
    userPoolId: REACT_APP_USER_POOL_ID,
    userPoolWebClientId: REACT_APP_USER_POOL_CLIENT_ID,
    mandatorySignIn: true,
    storage: window.sessionStorage
  },
  aws_appsync_region: REGION,
  aws_appsync_authenticationType: 'AMAZON_COGNITO_USER_POOLS',
  aws_appsync_graphqlEndpoint: REACT_APP_APPSYNC_API
};

export default awsconfig;
