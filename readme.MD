npm install -g serverless

create IAM user

serverless config credentials --provider aws --key xxxxxxxxxxxxxx --secret xxxxxxxxxxxxxx

serverless create --template aws-nodejs --path my-service

serverless deploy -v
