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
        timestamps()
      }
    }
    stage('Build') {
      steps {
        echo 'Testing Started'
      }
    }
  }
}