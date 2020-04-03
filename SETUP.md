# README #

This README would normally document whatever steps are necessary to get your application up and running.
This README describes how install a projet on vsCode with cypress/cucumber :

- from scratch 

- from an existing project

To distinguish the two ways, each mandatory step will be specified as appropriate.

## What is this repository for? ##

- This is a POC for vsCode - cypress - cucumber - github
- Version 1.0

## How do I get set up? ##

Prerequisites are:

- a desktop with windows

- get a vsCode application installed : https://code.visualstudio.com/download

- get NodeJs installed : https://nodejs.org/en/download/

- get git for windows : https://gitforwindows.org/


### Github ###
*(only if you want a versining project)*

*(only if from an existing project)* 

1 - get POC_VS project in local :

Create a folder on your desktop : POC_VS
Do a rigth click and select "git bash here"
Type (replace username by your account):

```
		git clone https://github.com/carolinelavergne/POC_VS.git (gitHub)
		git clone https://username@bitbucket.org/automationteamaltea/pocvscodecypresscucumber.git (bitbucket)
```


*(only if from scratch)* 

1 - In github, create an account : https://github.com/ *(only if you don't have one)*

2 - In github, create a new repository (POC_VS) *(only if this is a new repository)*

3 - In Command Prompt [cmd], type :

```
		cd Desktop
		git clone github_url
```
=> The repository POC_VS is on your local

### VS code ###

Open vsCode, open the folder : [File > Open folder...] and select the folder POC_VS *(if you skip the Github part, you have to create a folder named POC_VS)*

*(only if from scratch)* : the project is empty

=> The project in vscode is connected to github.

**Note : **
You can pull, push, add files, commit and push ;) 


### Cypress ###

*(All this part "Cypress" is only if from scratch)*

1 - Install Cypress, in the terminal window [Terminal > New Terminal], type : 

```
		cd C:\Users\Caroline\Desktop\POC_VS
		npm install cypress --save-dev
```

=> a package-lock.json file and node_modules folder are created

2 - Then, in the terminal window, type : 

```
	npm init
```
Information are necessary to initialize package.json but can be edited later. Don't panic and type what you want. 

=> a package.json and cypress.json files and cypress folder are created

3 - Update the package.json file with this content :
```
		{
		  "name": "poc_cypress",
		  "version": "1.0.0",
		  "description": "poc cypress",
		  "main": "index.js",
		  "devDependencies": {
			"cypress": "^4.2.0"
		  },
		  "scripts": {
			"start": "./node_modules/.bin/cypress open"
		  },
		  "author": "yourName"
		}
```

4 - Inside the folder POC_VS [POC_VS] :
- create a folder .vscode
- create settings.json file inside this folder
- update the settings.json file with this content :
```
	{
		"cucumberautocomplete.steps": [
			"cypress/integration/**/*.js"
		],
		"cucumberautocomplete.syncfeatures": "cypress/integration/*feature",
		"cucumberautocomplete.strictGherkinCompletion": true
	}
```

**Note : **

You can already execute tests :
In the terminal window, type : 

```
		npm start
```

All js files contained in the integration folder will be retrieved. 
Click on the file in which you want to run the tests, the test is running.


### Cucumber ###

1 - Install cucumber : [Ctrl+shitf+P] and search for "install extension" then for "Cucumber (Gherkin) Full Support"

2 - Install cypress-cucumber-preprocessor, in the terminal window, type : 

```
		npm install --save-dev cypress-cucumber-preprocessor@2.1.0
```

*(All these parts are only if from scratch : 3 -> 6)*

3 - Update the cypress.json file with this content :
```
	{
    	"integrationFolder": "cypress/integration",
    	"pluginsFile": "cypress/plugins/index.js",
    	"testFiles": "**/*.feature"
	}
```

4 - Update the package.json file with this content : 
```
	{
	  "name": "poc_cypress",
	  "version": "1.0.0",
	  "description": "poc cypress",
	  "main": "index.js",
	  "devDependencies": {
		"cypress": "^4.2.0",
		"cypress-cucumber-preprocessor": "^2.0.1"
	  },
	  "cypress-cucumber-preprocessor": {
		"nonGlobalStepDefinitions": true
	  },
	  "scripts": {
		"start": "./node_modules/.bin/cypress open"
	  },
	  "author": "yourName"
	}
```

5 - Inside the folder integration [POC_VS > cypress > integration] :
- create a folder POC1 
- create a file POC1.js inside this folder ==> this file contains the js code to execute the test
- create a file POC1.feature ==> this file contains the gherkins
(the names of the .feature file, the folder and the main .js file inside the folder are important to execute with succes the test)
[to get example: https://bitbucket.org/automationteamaltea/pocvscodecypresscucumber/src/master/cypress/integration/POC cucumber/ : POC1/POC1.js and POC1.feature]

6 - Update the file index.js [POC_VS > cypress > plugins] with this content : 
```
	const cucumber = require('cypress-cucumber-preprocessor').default;
 
	module.exports = (on, config) => {
		on('file:preprocessor', cucumber());
	};
```

### Execute Tests ###

1 - In the terminal window, type : 

```
		npm start
```

=> a new window is opened with "POC1.feature" file.

2 - In this window, click on POC1.feature, the test is running.

### Jenkins ###

In jenkins : 
1 - Go to http://localhost:8080/pluginManager/installed, check :

- NodeJS Plugin

- Cucumber reports

Click on download and restart jenkins

2 - Go to http://localhost:8080/, create a new item :

- name it "pocvscodecypresscucumber"

- select create a pipeline project

- In Pipeline : select "pipeline script from SCM" (in your project, you have to create a file named Jenkinsfile)

The content of this file is jenkins step :
 ```
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
 ```

- In CSM, select Git. Type the repository url : https://github.com/carolinelavergne/POC_VS.git (keep */master as branch and Jenkinsfile as script path)

- Save

3 - Go to http://localhost:8080/view/all/job/pocvscodecypresscucumber/ and launch a build

4 - Open the build and click on "console output"
=> you can see the build execution with tests :

![cucumber](https://bitbucket.org/automationteamaltea/pocvscodecypresscucumber/raw/master/images/console.png)

5 - Open the build and click on "Cucumber Report"
=> you can see a visual report :

![cucumber](https://bitbucket.org/automationteamaltea/pocvscodecypresscucumber/raw/master/images/cucumber-report.png)


## Who do I talk to? ##

* Repo owner or admin: caroline.lavergne@consort-group.com
