pipeline {
    agent any
    // agent { docker { image 'node:16.17.1-alpine' } }

    options {
        skipDefaultCheckout true
    }

    parameters {
        string(name: 'TEST_FILE_OR_FOLDER', defaultValue: './tests/demo.spec.ts', description: 'Testing directory')
        string(name: 'SHARDS', defaultValue: '1', description: 'How many shards should we use?')
        string(name: 'SUITE_ID_OR_CASE_ID', defaultValue: 'TC_SB_DB_LGIN_001', description: 'The Tag, Suite or Case ID that need to run. If empty --> run all tests from TEST_FILE_OR_FOLDER')
        string(name: 'CI_ENV', defaultValue: 'dev', description: 'Which env to perform tests?')
        string(name: 'BRANCH', defaultValue: 'main', description: 'Which code branch to perform tests?')
        string(name: 'TH_JOB_ID', defaultValue: '-1', description: 'Testhub Job ID (If run directly, please skip it)')
        string(name: 'SLACK_ID', defaultValue: '', description: 'Your slack ID to get notification')
        string(name: 'TH_JOB_NAME', defaultValue: '', description: 'Testhub Job Name')
        string(name: 'TH_JOB_RUN_MODE', defaultValue: '', description: 'Testhub Run mode (one-time|multiple-time)')
    }


    stages {
        stage('Update job desc') {
            steps {
                script {
                currentBuild.displayName = "${ID()} - ${USER()}"
                if (env.TH_JOB_NAME != null && env.TH_JOB_NAME != "") {
                  currentBuild.description = "${TH_JOB_NAME}"
                  }
                }
            }
        }

        withEnv(['PATH+NODE=/var/jenkins_home/.nvm/versions/node/v18.13.0/bin']) {
        stage('Running tests') {
            steps {
                sh "npm install -g yarn"
                sh "yarn install"
            }
        }
    }
}

def USER() {
 wrap([$class: 'BuildUser']) {
      return env.BUILD_USER
    }
}

def ID() {
 wrap([$class: 'BuildUser']) {
      return env.BUILD_DISPLAY_NAME
    }
}
