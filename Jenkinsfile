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
            sh "mkdir -p /meetingroomplannersecrets"
            sh "echo '{\"key\":\"thisisthenewvalue\"}' > /meetingroomplannersecrets/secretfile.json"
            sh "docker rm -f secretfiletest || true"
            sh "cat /meetingroomplannersecrets/secretfile.json"
            sh "ls -l / | grep meetingroomplannersecrets"
            sh "ls -l  /meetingroomplannersecrets/secretfile.json"
            sh "cat /meetingroomplannersecrets/secretfile.json"
            sh "docker build --no-cache -f production_dockerfile -t secretfiletest ." 
            // mounting like this apparently puts the volume under /app/testvolume
            sh "docker run -e GCAL_PRIVATE_KEY=$GCAL_PRIVATE_KEY -e GCAL_PRIVATE_KEY_ID=$GCAL_PRIVATE_KEY_ID --mount type=bind,source=/meetingroomplannersecrets,target=/meetingroomplannersecrets --name secretfiletest secretfiletest"
            sh "docker inspect -f {{.Mounts}} secretfiletest"
        }
    }
}