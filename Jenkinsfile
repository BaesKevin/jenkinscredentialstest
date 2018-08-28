pipeline{
    agent { docker {image 'node:6.3'}}

    tools {nodejs "node"}

    stages {
        environment {
            MY_SECRET = credentials('dev_gcal_creds')
        }   
        
        stage('run'){
            steps {
                sh 'node app.js'
            }
        }
    }
}