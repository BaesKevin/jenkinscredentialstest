pipeline{
    agent { docker {image 'node:6.3'}}
    stages {
        stage('run'){
            steps {
                sh 'npm install'
                sh 'npm start'
            }
        }
    }
}