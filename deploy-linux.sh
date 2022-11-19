#!/bin/bash

heroku login

echo "Start deploying..."

heroku git:remote -a latelier-tenis-backend
git push heroku master

echo "Deployed Successfully!"