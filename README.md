# React Native useEffect Cleanup Function Error

This repository demonstrates a common, yet tricky error in React Native applications involving the `useEffect` hook and its cleanup function. The issue arises when the cleanup function attempts to perform an action on a resource that has already been released or is no longer accessible, typically after the component unmounts.

The provided example shows how this error can manifest and offers a solution to prevent it.

## Problem

The `bug.js` file shows a `useEffect` hook with a cleanup function that tries to unsubscribe from an asynchronous operation (e.g., a network request or subscription). If the component unmounts before the cleanup function is executed,  `subscription.unsubscribe()` will likely throw an error because the subscription might be null or undefined.

## Solution

The `bugSolution.js` file presents a solution that addresses this issue by adding a check to ensure that the subscription is still valid before attempting to unsubscribe. This prevents the error from occurring.