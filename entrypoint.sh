#!/bin/sh

for file in /app/assets/*.js
do
  sed -i 's|VITE_API_BASE_URL|'${API_BASE_URL}'|g' $file
  sed -i 's|VITE_KC_URL|'${KC_URL}'|g' $file
  sed -i 's|VITE_KC_REALM|'${KC_REALM}'|g' $file
  sed -i 's|VITE_KC_CLIENT_ID|'${KC_CLIENT_ID}'|g' $file
done

miniserve --spa --index index.html
