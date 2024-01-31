# Autocomplete Component

# Getting Started
```bash
yarn install
yarn dev
```

**Autocomplete Component** is a React TypeScript implementation of an autocomplete component used to search for NBA teams.
It provides asynchronous data fetching and filtering, with a user-friendly interface that highlights matched search terms.

## Prerequisites

- Node.js >= 18.x
- npm >= 10.x

## Setup and Installation

## Features

- Asynchronous data filtering.
- Data fetched from a real API for NBA teams.
- Input onChange filtering debouncing
- Matching parts of search terms are highlighted in dropdown results.
- Basic keyboard navigation support.
- Basic error handling with logging into the browser console.
- Handling clicking outside the autocomplete

## Notes for Production - since this is NOT production ready app

1. **Error Handling**: Improve error feedback to users, not just console logs.
2. **Optimization**: Consider virtualized lists or pagination for larger data sets.
3. **Accessibility**: Implement ARIA roles/attributes for full accessibility.
4. **CSS**: Refine styles for better aesthetics and responsiveness.
5. **State Management**: For scalability, consider Redux, Zustand. (Initially, a `TeamContext` (ContextAPI) was planned but not implemented due to time constraints.)
6. **Testing**: Add robust tests for all functionalities.