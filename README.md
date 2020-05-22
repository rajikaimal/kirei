# kirei

Prettier as a Service

## Request format

- http post - https://kirei.rajikaimal.now.sh/api

```json
{
  "src": "const x=1212",
  "opts": { "semi": true, "parser": "babel" }
}
```

- opts - https://prettier.io/docs/en/options.html

## Development

```
$ npm install -g now
$ now dev
```

MIT
