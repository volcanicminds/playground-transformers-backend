# volcanic-backend-sample

## How to compile & run (prod)

```bash
yarn && yarn compile
yarn prod
```

## How to run (dev)

```bash
yarn start
```

## Environment sample

```ruby
NODE_ENV=development

HOST=0.0.0.0
PORT=2230

# LOG_LEVEL: trace, debug, info, warn, error, fatal
LOG_LEVEL=trace
LOG_COLORIZE=true
LOG_TIMESTAMP=true
LOG_TIMESTAMP_READABLE=true
LOG_FASTIFY=false
LOG_DB_LEVEL=warn

SWAGGER=true
# SWAGGER_HOST=localhost:2230
SWAGGER_TITLE=Sample API Documentation
SWAGGER_DESCRIPTION=List of available APIs and schemas to use on platform Volcanic Sample
SWAGGER_VERSION=0.1.0
SWAGGER_PREFIX_URL=/documentation

```
