#!/bin/bash
#  How to use 
#   chmod +x set-env.sh
#  ./set-env.sh dev     # for development
#  ./set-env.sh prod    # for production
#


# Usage: ./set-env.sh dev  OR  ./set-env.sh prod

ENV="$1"

if [[ "$ENV" == "dev" ]]; then
  cp .env.development .env
  echo "🔧 Switched to Development Environment"
elif [[ "$ENV" == "prod" ]]; then
  cp .env.production .env
  echo "🚀 Switched to Production Environment"
else
  echo "❌ Usage: ./set-env.sh [dev|prod]"
fi

