#!/bin/bash

# Generate Concourse keys for Docker setup
set -e

KEYS_DIR="./keys"

echo "🔑 Generating Concourse keys..."

# Create keys directory
mkdir -p $KEYS_DIR/{web,worker}

# Generate web keys
ssh-keygen -t rsa -f $KEYS_DIR/web/tsa_host_key -N ''
ssh-keygen -t rsa -f $KEYS_DIR/web/session_signing_key -N ''

# Generate worker keys
ssh-keygen -t rsa -f $KEYS_DIR/worker/worker_key -N ''

# Copy public keys
cp $KEYS_DIR/worker/worker_key.pub $KEYS_DIR/web/authorized_worker_keys
cp $KEYS_DIR/web/tsa_host_key.pub $KEYS_DIR/worker/

# Set permissions
chmod 600 $KEYS_DIR/web/*
chmod 600 $KEYS_DIR/worker/*

echo "✅ Keys generated successfully!"
echo "📁 Keys stored in: $KEYS_DIR"
echo ""
echo "🚀 Start Concourse with:"
echo "   docker-compose up -d"
echo ""
echo "🌐 Access at: http://localhost:8080"
echo "👤 Login: admin/admin"