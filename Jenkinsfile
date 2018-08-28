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
            env.PARENT_FOLDER = sh(
                script: "echo ${MY_SECRET_PATH} | rev | cut -d'/' -f 2 | rev",
                returnStdOut: true
            )
            echo "${PARENT_FOLDER}"
            sh "docker build --no-cache -f production_dockerfile -t secretfiletest ."
            sh "docker run --rm -v ${MY_SECRET_PATH}:/app/secrets secretfiletest"
        }    
    }
    


    
}