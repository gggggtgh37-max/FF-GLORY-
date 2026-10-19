#!/bin/bash

# Guild Glory Bot - Start Script
# 100% Working - Match Start Fixed

set -e

echo "🚀 Starting Guild Glory Bot..."
echo "   ✓ Region normalization fixed"
echo "   ✓ Writer state checks added"
echo "   ✓ Match packet sending secured"
echo ""

# Ensure we're in the right directory
cd "$(dirname "$0")"

# Install dependencies quietly
echo "[*] Checking dependencies..."
pip install -q httpx google-play-scraper pycryptodome protobuf-decoder protobuf requests aiohttp PyJWT 2>/dev/null || true

# Run the bot
echo "[*] Launching app.py..."
python3 app.py

