# Serverless Framewrok
![alt text](https://raw.githubusercontent.com/Develop-X/Serverless/master/ServerlessFramework.png)  

### WHere to start?
https://serverless.com/framework/docs/providers/aws/guide/quick-start/  

``
npm install -g serverless   
``  

![alt text](https://raw.githubusercontent.com/Develop-X/Serverless/master/serverless.png)  

* Create IAM user
https://serverless.com/framework/docs/providers/aws/guide/iam/

* Setup user access  
serverless config credentials --provider aws --key xxxxxxxxxxxxxx --secret xxxxxxxxxxxxxx  

* Create project  
serverless create --template aws-nodejs --path my-service  

* Serverless yml  
https://serverless.com/framework/docs/providers/aws/guide/serverless.yml/  

* Serverless Deploy  
``  
serverless deploy -v
``  

![alt text](https://raw.githubusercontent.com/Develop-X/Serverless/master/serverlessdeploy.png)  

### Serverless offline
https://github.com/dherault/serverless-offline  
```  
serverless plugin install --name serverless-offline  
serverless offline start  
```  
![alt text](https://raw.githubusercontent.com/Develop-X/Serverless/master/serverlessOffline.png)  

### Insomnia
![alt text](https://raw.githubusercontent.com/Develop-X/Serverless/master/serverlessMongo.png)  

### Serverless dashbird

https://app.dashbird.io/

### Mongodb
![alt text](https://raw.githubusercontent.com/Develop-X/Serverless/master/mongodb.png)  
