import * as cdk from 'aws-cdk-lib';
export class TestStack extends cdk.Stack {
    constructor(scope, id) {
        super(scope, id);
        // Empty stack for testing
    }
}
const app = new cdk.App();
new TestStack(app, 'TestStack');
