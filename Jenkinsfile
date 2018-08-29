// 'node' means scripted pipeline, keep in mind when googling stuff because there are a lot of differences with declarative pipeline
node {
    // tell Jenkins to pull the code from the repo (not necessary in declarative)
    stage('checkout') {
		checkout scm
	}

    stage('build with folder to mount already created') {
        sh "docker rm -f secretfiletest || true"
        sh "docker build --no-cache -f simpledockerfile -t secretfiletest ."
        sh "docker run -v /meetingroomplannersecrets:/containersecrets --name secretfiletest secretfiletest"
    }

    // stage('build') {
    //     // read credentials file, does not actually read contents, but returns the path of the file
    //     withCredentials(
    //         [
    //             string(credentialsId: 'GCAL_PRIVATE_KEY_ID', variable: 'GCAL_PRIVATE_KEY_ID'),
    //             string(credentialsId: 'GCAL_PRIVATE_KEY', variable: 'GCAL_PRIVATE_KEY')
    //         ]
    //     ) {
    //         sh "mkdir -p /meetingroomplannersecrets"
    //         sh "whoami"
    //         sh "chmod 777 /meetingroomplannersecrets"
    //         sh "echo '{\"key\":\"thisisthenewvalue\"}' > /meetingroomplannersecrets/secretfile.json"
    //         sh "chmod 777 /meetingroomplannersecrets/secretfile.json"
    //         sh "docker rm -f secretfiletest || true"
    //         sh "cat /meetingroomplannersecrets/secretfile.json"
    //         sh "ls -l / | grep meetingroomplannersecrets"
    //         sh "ls -l  /meetingroomplannersecrets/secretfile.json"
    //         sh "cat /meetingroomplannersecrets/secretfile.json"
    //         sh "docker build --no-cache -f production_dockerfile -t secretfiletest ." 
    //         // mounting like this apparently puts the volume under /app/testvolume
    //         sh "docker run -e GCAL_PRIVATE_KEY=$GCAL_PRIVATE_KEY -e GCAL_PRIVATE_KEY_ID=$GCAL_PRIVATE_KEY_ID -v /meetingroomplannersecrets:/meetingroomplannersecrets --name secretfiletest secretfiletest"
    //         sh "docker inspect -f {{.Mounts}} secretfiletest"
    //     }
    // }

    // stage('use secret file') {
    //     withCredentials(
    //         [
    //             string(credentialsId: 'GCAL_PRIVATE_KEY_ID', variable: 'GCAL_PRIVATE_KEY_ID'),
    //             string(credentialsId: 'GCAL_PRIVATE_KEY', variable: 'GCAL_PRIVATE_KEY'),
    //             file(credentialsId: 'dev_gcal_creds', variable: 'GCAL_CREDS')
    //         ]
    //     ) {
    //         PARENT_FOLDER = sh (
    //             script: "echo ${GCAL_CREDS} | rev | cut -d'/' -f 2- | rev",
    //             returnStdout: true
    //         ).trim()
    //         sh "ls ${PARENT_FOLDER}"
    //         sh "docker rm -f secretfiletest2 || true"
    //         sh "docker build --no-cache -f creds_dockerfile -t secretfiletest2 ."
    //         sh "docker run -e GCAL_PRIVATE_KEY=$GCAL_PRIVATE_KEY -e GCAL_PRIVATE_KEY_ID=$GCAL_PRIVATE_KEY_ID -v ${PARENT_FOLDER}:/secretfilestash --name secretfiletest2 secretfiletest2"
    //         sh "docker inspect -f {{.Mounts}} secretfiletest"
    //     }
    // }
}