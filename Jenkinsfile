pipeline {
  agent any
  stages {
    stage('Wait for Push') {
      steps {
        echo 'Branch Pushed'
      }
    }
    stage('Merge') {
      steps {
        echo 'Merge Started'
        timestamps() {
          echo 'timestamp'
        }
        
      }
    }
    stage('Test') {
      steps {
        echo 'Testing Started'
        junit(allowEmptyResults: true, testResults: 'Results')
      }
    }
    stage('Build') {
      steps {
        echo 'Build Started'
      }
    }
  }
}