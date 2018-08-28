pipeline{
    // tell jenkins to run the pipeline inside a docker container
    //agent { docker {image 'node:6.3'}}
    agent any

    tools {nodejs "node"}

    environment {
        MY_SECRET_PATH = credentials('dev_gcal_creds')
    }

    stages {
        stage('run') {
            steps {
                sh 'docker build -f production_dockerfile -t secretfiletest .'
                sh 'docker run --rm -e MY_SECRET_PATH=${MY_SECRET_PATH} secretfiletest'
            }
        }
    }
}