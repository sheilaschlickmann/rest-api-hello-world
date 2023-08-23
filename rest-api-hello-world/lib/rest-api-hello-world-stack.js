const { Stack, Duration } = require('aws-cdk-lib');
const { Function, Runtime, Code } = require('aws-cdk-lib/aws-lambda');
const { RestApi, LambdaIntegration } = require('aws-cdk-lib/aws-apigateway');
// const sqs = require('aws-cdk-lib/aws-sqs');

class RestApiHelloWorldStack extends Stack {
  /**
   *
   * @param {Construct} scope
   * @param {string} id
   * @param {StackProps=} props
   */
  constructor(scope, id, props) {
    super(scope, id, props);

    const helloWorldFn = new Function(this, `hello-world-${process.env.NAMESPACE}`, {
      runtime: Runtime.NODEJS_18_X,
      code: Code.fromAsset('lambda'),
      handler: 'hello-world.handler',
    });

    const api = new RestApi(this, 'HelloWorldApi', {
      restApiName: 'HelloWorldApi',
    });

    api.root.addMethod('GET', new LambdaIntegration(helloWorldFn));
  }
}

module.exports = { RestApiHelloWorldStack }
