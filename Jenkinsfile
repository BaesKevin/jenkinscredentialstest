// 'node' means scripted pipeline, keep in mind when googling stuff because there are a lot of differences with declarative pipeline
node {
    // tell Jenkins to pull the code from the repo (not necessary in declarative)
    stage('checkout') {
		checkout scm
	}

    stage('build') {
        // read credentials file, does not actually read contents, but returns the path of the file
        withCredentials([string(credentialsId: 'meetingroomplanner_gcal_private_key_id', variable: 'MY_SECRET_PATH')]) {
            sh "docker build --no-cache -f production_dockerfile -t secretfiletest ."
            sh "docker run --rm -e PRIVATE_KEY=$MY_SECRET_PATH --name secretfiletest secretfiletest"
        }
    }
}