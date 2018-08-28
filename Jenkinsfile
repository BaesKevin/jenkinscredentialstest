pipeline{
    agent { docker {image 'node:6.3'}}

    tools {nodejs "node"}

    environment {
        MY_SECRET = credentials('service_account_credentials.json')
    }

    stages {
        stage('run') {
            steps {
                sh 'node app.js'
            }
        }
    }
}