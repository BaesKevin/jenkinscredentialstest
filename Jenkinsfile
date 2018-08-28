pipeline{
    agent any

    tools {nodejs "node"}

    environment {
        MY_SECRET_PATH = credentials('dev_gcal_creds')
    }

    stages {
        stage('run') {
            steps {
                sh 'node app.js'
            }
        }
    }
}