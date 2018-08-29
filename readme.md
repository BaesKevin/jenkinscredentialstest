# Using secret files in docker containers created by jenkins

Jenkins setup
- install recommended plugins 

Add secret file that needs to be available to application to Jenkins:
- add credentials file with an id of choice
- in Jenkinsfile, get copy the file to the working directory, build and run the image.
- the image now has access to the secret file.

## volume issue

This works when run on a windows 10 machine with docker for windows latest version.
`docker build --no-cache -f production_dockerfile -t localsecretfiletest .;docker run -e GCAL_PRIVATE_KEY=a -e GCAL_PRIVATE_KEY_ID=b -v d:/secrets:/meetingroomplannersecrets --name localsecretfiletest localsecretfiletest`

The program finds the secret file and prints the contents.

Running this in Jenkins breaks the volumemount (env vars are not the issue).
```
sh "mkdir -p /meetingroomplannersecrets"
sh "echo '{\"key\":\"thisisthenewvalue\"}' > /meetingroomplannersecrets/secretfile.json"
sh "docker build --no-cache -f production_dockerfile -t secretfiletest ."
sh "docker run -e GCAL_PRIVATE_KEY=$GCAL_PRIVATE_KEY -e GCAL_PRIVATE_KEY_ID=$GCAL_PRIVATE_KEY_ID -v /meetingroomplannersecrets:/meetingroomplannersecrets --name secretfiletest secretfiletest"
```