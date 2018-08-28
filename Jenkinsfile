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
                script: "echo ${MY_SECRET_PATH} | rev | cut -d'/' -f 2- | rev" ,
                returnStdout: true
            ).trim()
            echo PARENT_FOLDER

            sh "cp $MY_SECRET_PATH ./secretfile.json"
            sh "docker build --no-cache -f production_dockerfile -t secretfiletest ."
            sh "docker run --rm --name secretfiletest secretfiletest"
        }        
    }
    
}