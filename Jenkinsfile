pipeline {
    agent {
        docker {
            image 'node:16-buster-slim' 
        }
    }
    stages {
        stage('Build') { 
            steps {
                script {
                    sh 'apt-get update && apt-get install -y npm'
                    sh 'npm install'
                    sh 'npm version'
                }
            }
 }
        }
    }
