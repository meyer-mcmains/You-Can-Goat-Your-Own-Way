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
        echo 'Testing Started'
      }
    }
  }
}