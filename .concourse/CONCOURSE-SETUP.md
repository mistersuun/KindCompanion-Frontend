# Complete Concourse CI/CD Setup

## 🎯 Architecture Overview

```
GitHub (develop) → Concourse CI → Docker Registry → Your Server
     ↓                ↓               ↓              ↓
  Code Push      Tests/SonarQube   Store Images   Deploy Containers
```

## 📋 Prerequisites

- Docker & Docker Compose
- Domain/Server for deployment
- Docker Hub account (or GitHub Container Registry)

## 🚀 Step 1: Start Concourse Server

```bash
cd .concourse

# Generate keys
./generate-keys.sh

# Start Concourse
docker-compose up -d

# Check status
docker-compose ps
```

**Access Concourse at: http://localhost:8080**
- Username: `admin`
- Password: `admin`

## 🔧 Step 2: Install Fly CLI

```bash
# Download from your Concourse instance
curl -o fly http://localhost:8080/api/v1/cli?arch=amd64&platform=linux
chmod +x fly
sudo mv fly /usr/local/bin/
```

## 🔐 Step 3: Configure Credentials

Edit `.concourse/credentials.yml`:

```yaml
sonarcloud-token: "your_token_here"          # ✅ Already set
docker-username: "your_docker_hub_username"  # Add this
docker-password: "your_docker_hub_password"  # Add this
```

### Get Docker Hub Credentials:
1. Create account at https://hub.docker.com
2. Create repository: `kindcompanion/frontend`
3. Generate access token in Security settings

## 🎭 Step 4: Deploy Pipeline

```bash
# Login to Concourse
fly -t kindcompanion login -c http://localhost:8080 -u admin -p admin

# Set pipeline
fly -t kindcompanion set-pipeline \
  -p kindcompanion-frontend \
  -c .concourse/pipeline.yml \
  -l .concourse/credentials.yml

# Unpause pipeline
fly -t kindcompanion unpause-pipeline -p kindcompanion-frontend

# View pipeline
open http://localhost:8080/teams/main/pipelines/kindcompanion-frontend
```

## 🧪 Step 5: Test the Pipeline

```bash
# Push to develop branch
git add .
git commit -m "feat: trigger CI/CD pipeline"
git push origin develop

# Watch in Concourse UI or CLI
fly -t kindcompanion watch -j kindcompanion-frontend/test-and-build
```

## 📦 Pipeline Stages

### 1. **Quality Gates** (Auto-triggered)
- ✅ Linting & formatting
- ✅ Unit tests (must pass)
- ✅ Accessibility tests
- ✅ SonarCloud analysis (80% coverage required)

### 2. **Build & Security** (If quality passes)
- 🐳 Docker image build
- 🔒 Security scan (npm audit)
- 📤 Push to Docker registry

### 3. **Deploy QA** (Auto after build)
- 🚀 Deploy container to QA
- 🧪 Run E2E tests

### 4. **Production** (Manual trigger)
```bash
fly -t kindcompanion trigger-job -j kindcompanion-frontend/deploy-to-production
```

## 🌐 Deployment Options

### Option A: Simple Docker Run
```bash
# On your server
docker run -d --name kindcompanion-qa -p 8081:80 kindcompanion/frontend:qa
docker run -d --name kindcompanion-prod -p 80:80 kindcompanion/frontend:production
```

### Option B: Docker Compose (Recommended)
```yaml
version: '3.8'
services:
  kindcompanion-qa:
    image: kindcompanion/frontend:qa
    ports: ["8081:80"]
    restart: unless-stopped

  kindcompanion-prod:
    image: kindcompanion/frontend:production
    ports: ["80:80"]
    restart: unless-stopped
```

## 🔍 Monitoring & Logs

```bash
# Pipeline logs
fly -t kindcompanion watch -j kindcompanion-frontend/test-and-build

# Container logs
docker logs kindcompanion-prod

# Concourse logs
docker-compose logs concourse-web
```

## ⚠️  Pipeline Will FAIL If:

- ❌ Tests don't pass
- ❌ Linting errors
- ❌ SonarCloud coverage < 80%
- ❌ Security vulnerabilities (high/critical)
- ❌ Docker build fails
- ❌ E2E tests fail

## 🛠️ Troubleshooting

### Pipeline Issues
```bash
# Check pipeline config
fly -t kindcompanion get-pipeline -p kindcompanion-frontend

# Validate pipeline
fly -t kindcompanion validate-pipeline -c .concourse/pipeline.yml
```

### Docker Issues
```bash
# Check if image exists
docker pull kindcompanion/frontend:latest

# Test local build
docker build -t test .
docker run -p 8080:80 test
```

## 🎉 Success!

Once setup is complete:
1. **Push to `develop`** → Automatic pipeline trigger
2. **Check SonarCloud**: https://sonarcloud.io/project/overview?id=mistersuun_KindCompanion-Frontend
3. **Monitor at**: http://localhost:8080
4. **QA site**: http://your-server:8081
5. **Production**: http://your-server (after manual approval)

Your bilingual KindCompanion app now has enterprise-grade CI/CD! 🚀