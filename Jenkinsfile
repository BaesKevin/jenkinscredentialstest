pipeline{
    agent { docker {image 'node:6.3'}}

    tools {nodejs "node"}

    environment {
        MY_SECRET = credentials('dev_gcal_creds')
    }

    stages {
        stage('run') {
            steps {
                sh 'node app.js'
            }
        }
    }
}