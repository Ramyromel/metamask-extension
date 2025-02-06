# MetaMask Coding Guidelines

### 1. New Code Should be TypeScript
- New components and utilities should be written in TypeScript and enforce typing.
- Existing code should be refactored into TypeScript where time allows. If you are replacing a component, use TypeScript.
- Follow contributor doc [TypeScript Guidelines](https://github.com/MetaMask/contributor-docs/blob/main/docs/typescript.md).

### 2. Using Functional Components and Hooks Instead of Classes
- Use functional components and hooks as they result in more concise and readable code compared to classes.

### 3. Organize Files Related to the Same Component in One Folder
- An example of a component file structure:

```.tsx
avatar-account
├── avatar-account.stories.tsx
├── avatar-account.scss
├── avatar-account.test.tsx
├── avatar-account.tsx
├── avatar-account.types.ts
├── README.md
├── __snapshots__
│   └── avatar-account.test.tsx.snap
└── index.ts
```

### 4. Follow Naming Conventions
- You should always use PascalCase when naming components. For example: *TextField*, *NavMenu*, and *SuccessButton*.
- Use camelCase for functions declared inside components like *handleInput()* or *showElement()*.
- When creating hooks use *withHookName()*.

### 5. Avoid Repetitive Code
- If you notice you are writing duplicated code or components, convert it into a component, utility functions or hooks that can be reused. Do this with [scalable intention](https://sandimetz.com/blog/2016/1/20/the-wrong-abstraction).

### 6. Component Optimization
- For functional components, instead of having large return statements, breaking the component down into smaller sub-components.
- Use memoizing techniques where possible. Utilize the `useMemo` hook for values and `useCallback` for functions. Follow recommended React guidance.
- Use the useEffect hook for performing side effects like data fetching or DOM manipulation after the component has rendered. However, use it judiciously as unnecessary effects can complicate code and affect performance. For a deeper understanding, we recommend reading [this article](https://react.dev/learn/you-might-not-need-an-effect).

### 7. Use Object Destructuring For Props
- Instead of passing the props object, use object destructuring to pass the prop name. This discards the need to refer to the props object each time you need to use it.

```tsx
import React from 'react';
const MyComponent = ({ id }) => {
  return <div id={id} />;
};

```

### 8. Document Each Component/Utility
- New utility functions should be documented [TSDoc](https://tsdoc.org) commenting format.
- Referencing our component docs.
- If applicable add URL to online resources if they are meaningful for the component/method.

### 9. Write Tests for Each Component/Utility
- Write tests for the components you create as it reduces the possibilities of errors. Testing ensures that the components are behaving as you would expect. In this project Jest is used, and it provides an environment where you can execute your tests.
- Follow the contributor docs [Unit Testing Guidelines](https://github.com/MetaMask/contributor-docs/blob/main/docs/unit-testing.md).

### 10. External packages should be well maintained
- New packages should only be integrated if the application doesn’t have the existing functionality and it cannot be added by implementing a small utility function. Use the https://snyk.io/advisor/ to assess the popularity, maintainability and security analysis. The package must be in good standing to be added to the project.
- Update existing dependencies when you notice they are out of date.

### 11. Conduct Regular Code Reviews
- Conduct regular code reviews to ensure that the codebase follows best practices and coding standards.
- Code reviews help identify potential issues, improve code quality, and facilitate knowledge sharing among team members.

### 12. Refactor Code for Readability and Maintainability
- Refactor code to improve readability, maintainability, and performance.
- Break down large functions or components into smaller, more manageable pieces.
- Use meaningful variable and function names to enhance code clarity.

### 13. Implement Static Code Analysis Tools
- Implement static code analysis tools to catch potential issues before they become problems.
- Use tools like ESLint, Prettier, and TypeScript to enforce coding standards and identify potential errors.

### 14. Ensure Tests are Up-to-Date
- Ensure that all tests are up-to-date and cover all critical functionality.
- Regularly review and update tests to reflect changes in the codebase.
- Use code coverage tools to identify areas of the code that need additional testing.
