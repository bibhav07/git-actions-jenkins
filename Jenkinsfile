pipeline {
  agent any

  tools {
    nodejs 'NodeJS'  // defined in Jenkins > Global Tool Configuration
  }

  stages {
    stage('Checkout') {
      steps {
        git url: 'https://github.com/bibhav07/git-actions-jenkins.git', branch: 'main'

      }
    }

    stage('Install dependencies') {
      steps {
        bat 'npm install'
      }
    }

    stage('Run Tests') {
      steps {
        bat 'npm run test'
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
