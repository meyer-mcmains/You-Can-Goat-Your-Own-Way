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
    stage('Build') {
      steps {
        echo 'Build Started'
      }
    }
    stage('Test') {
      steps {
        echo 'Test Started'
        junit(allowEmptyResults: true, testResults: 'Test Results')
        catchError() {
          build 'sadf'
        }
        
      }
    }
  }
}