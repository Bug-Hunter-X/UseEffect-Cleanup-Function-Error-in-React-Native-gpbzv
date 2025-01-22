To fix this issue, add a check within the cleanup function to ensure the subscription still exists before attempting to unsubscribe:

```javascript
useEffect(() => {
  const subscription = someAsyncOperation().subscribe(data => {});

  return () => {
    if (subscription) {
      subscription.unsubscribe();
    }
  };
}, []);
```

This conditional check prevents the error by only attempting to unsubscribe if the `subscription` is still defined.  This approach makes the cleanup function more robust and prevents unexpected errors during component unmounting.