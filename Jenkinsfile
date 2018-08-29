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
            sh "docker volumes create meetingroomplannersecrets"
            sh "echo '{\"key\":\"thisisthenewvalue\"}' > /var/lib/docker/volumes/meetingroomplannersecrets/_data/secretfile.json"
            sh "cat /var/lib/docker/volumes/meetingroomplannersecrets/_data/secretfile.json"
            sh "docker build --no-cache -f production_dockerfile -t secretfiletest ." 
            // mounting like this apparently puts the volume under /app/testvolume
            sh "docker run -e GCAL_PRIVATE_KEY=$GCAL_PRIVATE_KEY -e GCAL_PRIVATE_KEY_ID=$GCAL_PRIVATE_KEY_ID -v meetingroomplannersecrets:/secrets --name secretfiletest secretfiletest"
        }
    }
}