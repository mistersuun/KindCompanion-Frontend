# Concourse CI/CD Setup Instructions

## Prerequisites

1. **SonarCloud Token**: Get from https://sonarcloud.io/account/security/
2. **Railway Account**: Sign up at https://railway.app
3. **Concourse CI**: Either hosted or self-hosted instance

## Step 1: Get Your SonarCloud Token

1. Go to https://sonarcloud.io/account/security/
2. Generate a new token: `kindcompanion-ci`
3. Copy the token

## Step 2: Set Up Railway (Recommended Deployment)

```bash
# Install Railway CLI
npm install -g @railway/cli

# Login
railway login

# Create project
railway init kindcompanion-frontend

# Get project ID
railway status
```

## Step 3: Configure Pipeline Variables

Edit `.concourse/credentials.yml`:

```yaml
sonarcloud-token: "your_sonarcloud_token_here"
railway-token: "your_railway_token_here"
railway-project-id: "your_project_id_here"
```

## Step 4: Deploy Pipeline to Concourse

```bash
# Set the pipeline
fly -t your-concourse set-pipeline \
  -p kindcompanion-frontend \
  -c .concourse/pipeline.yml \
  -l .concourse/credentials.yml

# Unpause the pipeline
fly -t your-concourse unpause-pipeline -p kindcompanion-frontend
```

## Step 5: Test the Pipeline

1. Push code to `develop` branch
2. Watch pipeline at your Concourse URL
3. Pipeline will:
   - ✅ Run tests & linting
   - ✅ Check SonarCloud (80% coverage required)
   - ✅ Build Docker image
   - ✅ Deploy to Railway
   - ✅ Run E2E tests

## Quality Gates

Pipeline will FAIL if:
- ❌ Tests don't pass
- ❌ Linting errors
- ❌ SonarCloud coverage < 80%
- ❌ Security vulnerabilities found
- ❌ Build fails

## Manual Production Deployment

Production deployments require manual approval:
```bash
fly -t your-concourse trigger-job -j kindcompanion-frontend/deploy-to-production
```

## Troubleshooting

- Check SonarCloud project: https://sonarcloud.io/project/overview?id=mistersuun_KindCompanion-Frontend
- Railway logs: `railway logs`
- Concourse logs: Check job details in UI