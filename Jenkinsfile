// 'node' means scripted pipeline, keep in mind when googling stuff because there are a lot of differences with declarative pipeline
node {
    // tell Jenkins to pull the code from the repo (not necessary in declarative)
    stage('checkout') {
		checkout scm
	}

    stage('build') {
        // read credentials file, does not actually read contents, but returns the path of the file
        withCredentials(
            [
                string(credentialsId: 'GCAL_PRIVATE_KEY_ID', variable: 'GCAL_PRIVATE_KEY_ID'),
                string(credentialsId: 'GCAL_PRIVATE_KEY', variable: 'GCAL_PRIVATE_KEY')
            ]
        ) {
            sh "mkdir -p ${WORKSPACE}/testvolume"
            sh "echo '{\"key\":\"value\"}' > ${WORKSPACE}/testvolume/secretile.json"
            sh "docker build --no-cache -f production_dockerfile -t secretfiletest ."
            sh "docker run --rm -e GCAL_PRIVATE_KEY=$GCAL_PRIVATE_KEY -e GCAL_PRIVATE_KEY_ID=$GCAL_PRIVATE_KEY_ID -v ${WORKSPACE}/testvolume:/mountedtestvolume --name secretfiletest secretfiletest"
            sh "rm /testvolume/secretile.json"
            sh "rmdir /testvolume"
        }
    }
}