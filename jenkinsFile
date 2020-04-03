node('master'){
    stage("Checkout") {
        git 'https://github.com/carolinelavergne/POC_VS.git'
    }
    
    stage("Npm packege installation") {
        bat label: 'install NPM package', script: 'npm install'
    }
    
    stage("Cypress installation") {
        bat label: 'install cypress', script: 'npm install cypress --save-dev'
    }
            
    stage("Test running") {
        bat label: 'Run test', script: 'npm run start_all'
    }
    
    stage("Cucumber report") {
        cucumber buildStatus: 'SUCCESS',
            failedFeaturesNumber: -1, 
            failedScenariosNumber: -1, 
            failedStepsNumber: -1, 
            fileIncludePattern: '**/*.json', 
            jsonReportDirectory: 'cypress/cucumber-json/',
            pendingStepsNumber: -1, 
            skippedStepsNumber: -1, 
            sortingMethod: 'ALPHABETICAL'
    }
    stage("Archive video") {
        archiveArtifacts artifacts: 'cypress/videos/**/*.mp4'
    }
}