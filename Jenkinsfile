// 'node' means scripted pipeline, keep in mind when googling stuff because there are a lot of differences with declarative pipeline
node {
    // tell Jenkins to pull the code from the repo (not necessary in declarative)
    stage('checkout') {
		checkout scm
	}

    stage('build') {
        // read credentials file, does not actually read contents, but returns the path of the file
        withCredentials([file(credentialsId: 'dev_gcal_creds', variable: 'MY_SECRET_PATH')]) {
            // did this to try to use a volume and read the file that way, but volumes don't work like that
            // script reverses the path, splits on / and takes parts 2 till the end, and reverses that, which gives the folder a file is in
            PARENT_FOLDER = sh (
                script: "echo ${MY_SECRET_PATH} | rev | cut -d'/' -f 2- | rev" ,
                returnStdout: true
            ).trim()

            sh "ls -l $PARENT_FOLDER"
            sh "docker build --no-cache -f production_dockerfile -t secretfiletest ."
            sh "docker run --rm -e PRIVATE_KEY=thisisprivate --name secretfiletest secretfiletest"
        }
    }
}