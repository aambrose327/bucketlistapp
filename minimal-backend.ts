import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';

export class TestStack extends cdk.Stack {
  constructor(scope: Construct, id: string) {
    super(scope, id);
    // Empty stack for testing
  }
}

const app = new cdk.App();
new TestStack(app, 'TestStack');
