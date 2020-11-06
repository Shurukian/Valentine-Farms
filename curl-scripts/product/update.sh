#!/bin/bash

API="http://localhost:4741"
URL_PATH="/product"

curl "${API}${URL_PATH}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
--header "Authorization: Bearer ${TOKEN}" \
--data '{
    "product": {
      "name": "'"${NAME}"'",
      "expiration": "'"${EXPIRATION}"'",
      "isOrganic": "'"${ISORGANIC}"'",
      "quantity": "'"${QUANTITY}"'"
    }
  }'

echo
