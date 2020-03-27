# README #

This README would normally document whatever steps are necessary to get your application up and running.
This README describes how install a projet on vsCode with cypress/cucumber :

- from scratch 

- from an existing project

To distinguish the two ways, each mandatory step will be specified as appropriate.

### What is this repository for? ###

- This is a POC for vsCode - cypress - cucumber - github
- Version 1.0


### How do I get set up? ###

Prerequisites are:

- get a vsCode application installed : https://code.visualstudio.com/download

- get NodeJs installed : https://nodejs.org/en/download/



## Github ##

*(only if from an existing project)* 

1 - get POC_VS project in local :

```
		git clone https://github.com/carolinelavergne/POC_VS.git (gitHub)
		git clone https://username@bitbucket.org/automationteamaltea/pocvscodecypresscucumber.git (bitbucket)
```


*(only if from scratch)* 

1 - In github, create an account : https://github.com/ *(only if you don't have one)*

2 - In github, create a new repository (POC_VS) *(only if this is a new repository)*

3 - In Command Prompt [cmd], type :

```
		git clone github_url (be on the good location)
```
=> The repository POC_VS is on your local

## VS code ##

Open vsCode, open the folder : [File > Open folder...] and select the folder POC_VS

*(only if from scratch)* : the project is empty

=> The project in vscode is connected to github.

**Note : **
You can pull, push, add files, commit and push ;) 


## Cypress ##

*(All this part "Cypress" is only if from scratch)*

1 - Install Cypress, in the terminal window [Terminal > New Terminal], type : 

```
		cd /your/project/path (ie the POC_VS path: C:\workspace\POCs\POC_VS)
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
		  "name": "poc_1",
		  "version": "1.0.0",
		  "description": "poc 1",
		  "main": "index.js",
		  "devDependencies": {
			"cypress": "^4.2.0"
		  },
		  "scripts": {
			"start": "node build/dev-server.js"
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
    	"git.ignoreLimitWarning": true
	}
```

**Note : **

You can already execute tests :
In the terminal window, type : 

```
		./node_modules/.bin/cypress open
```

All js files contained in the integration folder will be retrieved. 
Click on the file in which you want to run the tests, the test is running.


## Cucumber ##

1 - Install cucumber : [Ctrl+shitf+P] and search for "install extension" then for "Cucumber (Gherkin) Full Support"

2 - Install cypress-cucumber-preprocessor, in the terminal window, type : 

```
		npm install --save-dev cypress-cucumber-preprocessor@2.1.0
		npm install cypress-cucumber-preprocessor@2.1.0
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
	  "name": "poc_1",
	  "version": "1.0.0",
	  "description": "poc 1",
	  "main": "index.js",
	  "devDependencies": {
		"cypress": "^4.2.0",
		"cypress-cucumber-preprocessor": "^2.0.1"
	  },
	  "cypress-cucumber-preprocessor": {
		"nonGlobalStepDefinitions": true
	  },
	  "scripts": {
		"start": "node build/dev-server.js"
	  },
	  "author": "yourName"
	}
```

5 - Inside the folder integration [POC_VS > cypress > integration] :
- create a folder POC 
- create a file POC.js inside this folder ==> this file contains the js code to execute the test
- create a file POC.feature ==> this file contains the gherkins
[to get example: https://bitbucket.org/automationteamaltea/pocvscodecypresscucumber/src/master/cypress/integration/POC/]

6 - Update the file index.js [POC_VS > cypress > plugins] with this content : 
```
	const cucumber = require('cypress-cucumber-preprocessor').default;
 
	module.exports = (on, config) => {
		on('file:preprocessor', cucumber());
	};
```

## Execute Tests ##

1 - In the terminal window, type : 

```
		./node_modules/.bin/cypress open
```

=> a new window is opened with "POC.feature" file.

2 - In this window, click on POC.feature, the test is running.


### Who do I talk to? ###

* Repo owner or admin: caroline.lavergne@consort-group.com
