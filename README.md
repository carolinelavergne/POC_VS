# README #

This README would normally document whatever steps are necessary to get your application up and running.

### What is this repository for? ###

* This is a POC for vsCode - cypress - cucumber - github
* Version 1.0

### How do I get set up? ###

Prerequisites are:
- get a vsCode application installed : https://code.visualstudio.com/download
- get NodeJs installed : https://nodejs.org/en/download/

## VS code ##
Open vsCode, import POC_VS project (https://github.com/carolinelavergne/POC_VS.git) 

## Cypress ##
Install Cypress, in the terminal window, type : 
* cd /your/project/path (ie the POC_VS path: C:\workspace\POCs\POC_VS)
* npm install cypress --save-dev
=> a package-lock.json file is created

Then, in the terminal window, type : 
* npm init
=> a package.json file is created

## Cucumber ##
Install cucumber : Ctrl+shitf+P and search for "install extension" then for "Cucumber (Gherkin) Full Support"

Install cypress-cucumber-preprocessor, in the terminal window, type : 
* npm install --save-dev cypress-cucumber-preprocessor@2.1.0
* npm install cypress-cucumber-preprocessor@2.1.0

## Execute Tests ##
In the terminal window, type : 
* ./node_modules/.bin/cypress open
=> a new window is opened with "POC.feature" file

Click on POC.feature, the test is running

## Github ##
In github, create an account : https://github.com/ (copy the username)

(only if there is no repository)
Create a repository and copy the url : https://github.com/carolinelavergne/POC_VS.git

In Visual Studio Code, select File -> Add Folder to Workspace -> Select the newly created directory
In Terminal Window, type:
        git config --global user.name github.username
		git clone https://github.com/carolinelavergne/POC_VS.git (be on the good location)

The project is connected to github and all files are on github

### Who do I talk to? ###

* Repo owner or admin: caroline.lavergne@consort-group.com
