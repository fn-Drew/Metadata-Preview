const fs = require('fs')

function Generate() {
  const data = { users: [] }
  // Create 1000 users
  for (let i = 0; i < 100000; i++) {
    data.users.push(
      {
        "$id": "https://example.com/person.schema.json",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": i,
        "type": "object",
        "properties": {
          "firstName": {
            "type": "string",
            "description": "The person's first name."
          },
          "lastName": {
            "type": "string",
            "description": "The person's last name."
          },
          "age": {
            "description": "Age in years which must be equal to or greater than zero.",
            "type": "integer",
            "minimum": 0
          }
        }
      }
    )
  }
  return data
}
fs.writeFileSync('data.json', JSON.stringify(Generate(), null, 4))