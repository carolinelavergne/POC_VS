pipeline {
    agent any
    stages {
        stage("Npm package installation") {
            steps {
                bat label: 'install NPM package', script: 'npm install'
            }
        }
        stage("Cypress installation") {
            steps {
                bat label: 'install cypress', script: 'npm install cypress --save-dev'
            }
        }
                
        stage("Test running") {
            steps {
                bat label: 'Run test', script: 'npm run start_all'
            }
      
            post {
                always {
                    cucumber buildStatus: 'SUCCESS',
                        failedFeaturesNumber: -1, 
                        failedScenariosNumber: -1, 
                        failedStepsNumber: -1, 
                        fileIncludePattern: '**/*.json', 
                        jsonReportDirectory: 'cypress/cucumber-json/',
                        pendingStepsNumber: -1, 
                        skippedStepsNumber: -1, 
                        sortingMethod: 'ALPHABETICAL'
                     archiveArtifacts artifacts: 'cypress/videos/**/*.mp4'
                }
           
                failure {
                    archiveArtifacts artifacts: 'cypress/screenshots/**/**/*.png'
                }
            }
        }
    }
}