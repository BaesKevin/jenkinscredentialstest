node {
    // tell jenkins to run the pipeline inside a docker container
    //agent { docker {image 'node:6.3'}}
    // agent any

    stage('run') {
        withCredentials([file(credentialsId: 'dev_gcal_creds', variable: 'MY_SECRET_PATH')]) {
            def pathParts = "${MY_SECRET_PATH}')".split('/')
            echo pathParts
            def parentPath = pathParts[-1];
            echo parentPath
            sh "docker build -f production_dockerfile -t secretfiletest ."
            sh "docker run -v ${MY_SECRET_PATH}:/app/secrets secretfiletest"
        }    
    }
    


    
}