Package that returns password strength in entropy bits or user friendly string.

# Install

```
npm i passquack
```

# Usage

```
const passQuack = require('passquack')
```

# For user friendly text

```
passQuack("password").text
```

# For entropy bits

```
passQuack("password").entropy
```
