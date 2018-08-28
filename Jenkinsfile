node {
    // tell jenkins to run the pipeline inside a docker container
    //agent { docker {image 'node:6.3'}}
    // agent any

    stage('run') {
        withCredentials([file(credentialsId: 'dev_gcal_creds', variable: 'MY_SECRET_PATH')]) {
            // def parts = "${MY_SECRET_PATH}".split('/');
            // echo parts
            // def path = parts[0]
            // echo path
            sh "docker build -f production_dockerfile -t secretfiletest ."
            sh "docker run --rm -e PARENT_PATH=${MY_SECRET_PATH} -v ${MY_SECRET_PATH}:/app/secrets secretfiletest"
        }    
    }
    


    
}