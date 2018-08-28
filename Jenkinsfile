node{
    // tell jenkins to run the pipeline inside a docker container
    //agent { docker {image 'node:6.3'}}
    agent any

    tools {nodejs "node"}

    environment {
        MY_SECRET_PATH = credentials('dev_gcal_creds')
    }

    def file = new File('${MY_SECRET_PATH}')
    def parentPath = file.getParentFile().getName()
    echo parentPath

    stages {
        stage('run') {
            steps {
                sh 'docker build -f production_dockerfile -t secretfiletest .'
                sh 'docker run -v ${MY_SECRET_PATH}:/app/secrets secretfiletest'
            }
        }
    }
}