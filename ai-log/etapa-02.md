# Stage 2: AI log

## Tools
- Gemini / ChatGPT

## Conversations
- Discussion about how to write immutable functions in JavaScript using the spread operator (`...`), `map`, and `filter` to manage plant catalog data.
- Questions regarding how to properly calculate a unique ID using the `reduce` method to prevent duplicates after item deletion.

## Key requests
### 1. Immutable functions and validation
- Asked for guidance on structuring add, toggle, and delete functions without mutating the original array.
- The assistant suggested using `[...lista, nou]` for adding and array methods for state management. I adapted the code specifically for my plant shop theme, including title and care level validation.

## What I learned / what did not work
- I understood why immutability is crucial for future integration with React in Stage 5.
- I initially faced a path/security issue when opening the file locally in the browser, which I resolved by running a local development server using Live Server.