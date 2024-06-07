module.exports = {
    // Other ESLint configurations...
    rules: {
      // Other rules...
      'no-unused-vars': 'warn', // Treat unused variables as warnings
      'react-hooks/exhaustive-deps': 'warn', // Treat missing useEffect dependencies as warnings
      // Other rules...
    },
    plugins: ["react-hooks"], // Define plugins outside the rules object
  };