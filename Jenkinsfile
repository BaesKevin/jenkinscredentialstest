node {
    // tell jenkins to run the pipeline inside a docker container
    //agent { docker {image 'node:6.3'}}
    // agent any
    stage('checkout') {
		checkout scm
	}

    stage('build') {
        withCredentials([file(credentialsId: 'dev_gcal_creds', variable: 'MY_SECRET_PATH')]) {
            PARENT_FOLDER = sh (
                script: "echo ${MY_SECRET_PATH} | rev | cut -d'/' -f 1 | rev" ,
                returnStdout: true
            ).trim()
            echo PARENT_FOLDER

            sh "docker build --no-cache -f production_dockerfile -t secretfiletest ."
            sh "docker run --rm -e PARENT_PATH=$PARENT_FOLDER -v $PARENT_FOLDER:/app/secrets secretfiletest"
        }        
    }
    
}