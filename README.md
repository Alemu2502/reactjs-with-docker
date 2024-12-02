CI/CD Pipeline
This project uses GitHub Actions for Continuous Integration and Continuous Deployment (CI/CD). The workflow automates the process of building, testing, and deploying the application to Netlify.

Workflow Overview
Trigger: The workflow triggers on every push or pull request to the main branch.

Steps:

Checkout the code.

Cache dependencies.

Set up the Node.jsenvironment.

Install project dependencies using npm ci.

Run tests to ensure code quality.

Build the project.

Deploy the project to Netlify.

Benefits
Efficiency: The workflow completes in around 25 seconds, ensuring fast and reliable deployments.

Quality Assurance: Tests run before deployment to catch any issues early.

Best Practices: Implements industry best practices such as dependency caching and environment setup.