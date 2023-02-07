// Configure your AWS resources here
const awsconfig = {
  Auth: {
    region: 'us-east-1',
    userPoolId: 'us-east-1_vZOTCWbsV',
    userPoolWebClientId: '',
    mandatorySignIn: true,
    storage: window.sessionStorage
  },
  aws_appsync_region: 'us-east-1',
  aws_appsync_authenticationType: 'AMAZON_COGNITO_USER_POOLS',
  aws_appsync_graphqlEndpoint:
    'https://hj4awsi6dfgbfmbpltrfcd42ra.appsync-api.us-east-1.amazonaws.com/graphql'
};

export default awsconfig;
