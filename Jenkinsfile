pipeline{
    agent { docker {image 'node:6.3'}}

    tools {nodejs "node"}

    environment {
        MY_SECRET_PATH = credentials('dev_gcal_creds')
    }

    stages {
        stage('run') {
            steps {
                sh 'docker run -e MY_SECRET_PATH=${MY_SECRET_PATH} -f production_dockerfile .'
            }
        }
    }
}