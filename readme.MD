npm install -g serverless

create IAM user

serverless config credentials --provider aws --key xxxxxxxxxxxxxx --secret xxxxxxxxxxxxxx

serverless create --template aws-nodejs --path my-service

serverless deploy -v

### Serverless offline

serverless plugin install --name serverless-offline

serverless offline start

### Serverless dashbird

https://app.dashbird.io/
