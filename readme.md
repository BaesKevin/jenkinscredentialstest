# Using secret files in docker containers created by jenkins

Jenkins setup
- install recommended plugins 

Add secret file that needs to be available to application to Jenkins:
- add credentials file with an id of choice
- in Jenkinsfile, get copy the file to the working directory, build and run the image.
- the image now has access to the secret file.