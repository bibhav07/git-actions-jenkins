pipeline {
  agent any

  tools {
    nodejs 'NodeJS'  // defined in Jenkins > Global Tool Configuration
  }

  stages {
    stage('Checkout') {
      steps {
        git 'https://github.com/bibhav07/git-actions-jenkins.git'
      }
    }

    stage('Install dependencies') {
      steps {
        sh 'npm install'
      }
    }

    stage('Lint code') {
      steps {
        sh 'npm run lint'
      }
    }

    stage('Run Tests') {
      steps {
        sh 'npm run test'
      }
    }
  }

  post {
    success {
      echo 'Build passed ✅'
    }
    failure {
      echo 'Build failed ❌'
    }
  }
}
