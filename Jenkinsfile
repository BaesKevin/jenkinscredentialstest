pipeline{
    agent { docker {image 'node:6.3'}}

    tools {nodejs "node"}

    environment {
        MY_SECRET = credentials('meetingroomplanner_gcal_private_key_id')
    }

    stages {
        stage('run') {
            steps {
                sh 'node app.js'
            }
        }
    }
}