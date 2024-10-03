// pipeline {
//     agent any

//     environment {
//         NODE_VERSION = 'NodeJS 14'  // Define the NodeJS version installed in Jenkins
//         NETLIFY_SITE_ID = 'netlify-auth-token'  // Replace with your Netlify site ID
//         NETLIFY_AUTH_TOKEN = credentials('nfp_iG4eTjEsTCRamQ8P8uaW9EsGTNJPbF7obd46')  // Fetch Netlify authentication token from Jenkins credentials
//     }

//     stages {
//         stage('Clone Repository') {
//             steps {
//                 // Clone the repository from Git
//                 git branch: 'main', url: 'https://github.com/abhijitgode99/imdbApp.git'
//             }
//         }

//         stage('Install Dependencies') {
//             steps {
//                 // Use the specified NodeJS environment
//                 script {
//                     def nodejs = tool name: "${NODE_VERSION}", type: 'NodeJSInstallation'
//                     env.PATH = "${nodejs}/bin:${env.PATH}"
//                 }
//                 // Install project dependencies (node_modules)
//                 sh 'npm install'
//             }
//         }

//         stage('Build Angular Application') {
//             steps {
//                 // Run Angular production build
//                 sh 'npm run build --prod'
//             }
//         }

//         stage('Deploy to Netlify') {
//             steps {
//                 // Install Netlify CLI (if not installed)
//                 sh 'npm install -g netlify-cli'

//                 // Deploy to Netlify
//                 sh """
//                 netlify deploy --prod --dir=dist/your-angular-app --site=${NETLIFY_SITE_ID} --auth=${NETLIFY_AUTH_TOKEN}
//                 """
//             }
//         }
//     }

//     post {
//         always {
//             cleanWs()
//         }

//         success {
//             echo 'Application deployed successfully to Netlify!'
//         }

//         failure {
//             echo 'Build or deployment failed!'
//         }
//     }
// }

pipeline {
    agent any 

    stages {
        stage('Setup') {
            steps {
                script {
                    // Install Node.js if necessary, using nvm or directly
                    sh 'nvm install 14'  // Specify the version you need
                    sh 'nvm use 14'
                }
            }
        }
        stage('Install Dependencies') {
            steps {
                script {
                    sh 'npm install'
                }
            }
        }
        stage('Build') {
            steps {
                script {
                    sh 'npm run build --prod'
                }
            }
        }
        stage('Deploy') {
            steps {
                script {
                    // Add your deployment steps here
                }
            }
        }
    }
}
