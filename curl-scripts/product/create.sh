#!/bin/bash

API="http://localhost:4741"
URL_PATH="/product"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
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

# PRODUCTNAME='Honey' EXPIRATION='2022-01-01' ISORGANIC='true'
# QUANTITY='5 gallons'

# NAME="KFC" ADDRESS=" 123 Some St" PHONE=456 CUISINE="Chicken"
# OWNER=5f9c6840736dc62623448340 sh curl-scripts/restaurant/create.sh
