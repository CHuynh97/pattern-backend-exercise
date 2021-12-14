# Pattern Backend Exercise

This repo is Christopher Huynh's submission to Pattern's take home assignment as part of the interview process. The problem statement is found [here](https://patterncentral.notion.site/Backend-Take-Home-Exercise-aca88cb0eac74e7484b32e346794a6da).


## Environment Setup

The following technologies were used when implementing this assignment:

- Node v12.22.7
- TypeORM ^0.2.41
- Express ^4.17.1
- Postgresql

To run my application in your own local machine, this document will assume that Postresql is already installed. You will have to edit the values for `username` and `password` in ormconfig.json to match the credentials of the local Postresql server. In this directory

```sh
# 1. install dependencies
npm install

# 2. start application
npm start
```

## API Specification

### POST /jobs

This operation creates a new unique job posting in the databased identified by a positive integer.

Request Body:
```typescript
{
    "title": string, // Job title
    "description": string, // Job description
    "hourlyPay": number, // Hourly wage
    "location": string // Geographic location
}
```

Successful Response:
```typescript
{
    "id": number // Unique job identifier
}
```

Status Codes:

- 201: Successfully created
- 400: Bad request


### GET /jobs/${id}

This operation queries the database to retrieve info non-deleted job posting specified by a unique identifier.

Request parameters:
```typescript 
{
    "id": number // Unique job identifier
}
```

Successful Response:
```typescript
{
    "id": number // Unique job identifier
    "title": string, // Job title
    "description": string, // Job description
    "hourlyPay": number, // Hourly wage
    "location": string, // Geographic location
    "createdTimestamp": string, // When the job posting was created
    "updatedTimestamp": string, // When the job posting was last updated
}
```

Status Codes:

- 200: Success
- 404: Not found

### GET /jobs

This operation queries the database to retrieve info for all non-deleted job postings that match query criteria.

Request:
```typescript
{
    "title": string, // for all titles matching
    "location": string // for all locations matching
    "minHourlyPay": number // specify a min range of hourly wages.
    "maxHourlyPay": number // specify a max range of hourly wages.
}
```

Successful Response:
```typescript
{
    "jobs": [{
        "id": number, // Unique job identifier
        "title": string, // Job title
        "description": string, // Job description
        "hourlyPay": number, // Hourly wage
        "location": string, // Geographic location
        "createdTimestamp": string, // When the job posting was created
        "updatedTimestamp": string, // When the job posting was last updated
    }]
}
```

Status Codes:

- 200: Success

### UPDATE /jobs/${id}

This operation updates a job posting that already exists with new info contained in the request body.

Request Parameters:
```typescript 
{
    "id": number // Unique job identifier
}
```

Request Body:
```typescript
{
    
    "title": string, // Job title
    "description": string, // Job description
    "hourlyPay": number, // Hourly wage
    "location": string // Geographic location
}
```

Status Codes:

- 204: Successfull with no response body
- 400: Bad request
- 404: Not found

### DELETE /jobs/${id}

This operation soft deltes a job posting from the database specified by the unique identifier.

Request Parameters:
```typescript 
{
    "id": number // Unique job identifier
}
```

Status Codes:

- 204: Successfull with no response body
- 404: Not found

## How to manually test

If you are able to spin up the application, you can use cURL to make requests

```sh
# run script to start application
npm start

# Example curl commands
curl -X POST 'http://localhost:8080/jobs' -H 'Content-Type: application/json' --data '{"title": "chef", "description": "Cook burgers with cheese!", "hourlyPay": 18.50, "location": "Toronto"}'

curl -X GET 'http://localhost:8080/jobs/1'

curl -X GET 'http://localhost:8080/jobs?title=software+engineer?location=Toronto'

curl -X PUT 'http://localhost:8080/jobs/1' -H 'Content-Type: application/json' --data '{"title": "chef", "description": "Cook burgers with cheese and bacon!", "hourlyPay": 20.50, "location": "New York"}'

curl -X DELETE 'http://localhost:8080/jobs/1'
```

TODO: Come up with a simple test suite to test endpoints.
