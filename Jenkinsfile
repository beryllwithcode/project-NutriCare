pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                // Langkah-langkah untuk build aplikasi (sesuaikan dengan proyek Anda)
                script {
                    echo 'Building the application...'
                    // Misalnya, untuk Node.js
                    sh 'npm install'
                }
            }
        }

        stage('Test') {
            steps {
                // Langkah-langkah untuk melakukan test (sesuaikan dengan proyek Anda)
                script {
                    echo 'Running tests...'
                    // Misalnya, untuk Node.js
                    sh 'npm test'
                }
            }
        }

        stage('Manual Approval') {
            steps {
                input message: 'Lanjutkan ke tahap Deploy?', ok: 'Proceed'
            }
        }

        stage('Deploy') {
            steps {
                // Langkah-langkah untuk deployment (sesuaikan dengan proyek Anda)
                script {
                    echo 'Deploying the application...'
                    // Misalnya, untuk Node.js
                    sh 'npm deploy'
                }
            }
        }

        stage('Delay for 1 minute') {
            steps {
                // Menunggu 1 menit sebelum melanjutkan
                script {
                    echo 'Delaying for 1 minute...'
                    sleep time: 60, unit: 'SECONDS'
                }
            }
        }

        stage('Clean Up') {
            steps {
                // Langkah-langkah pembersihan atau penutupan aplikasi (sesuaikan dengan proyek Anda)
                script {
                    echo 'Cleaning up...'
                    // Misalnya, untuk Node.js
                    sh 'npm clean-up'
                }
            }
        }
    }
}
