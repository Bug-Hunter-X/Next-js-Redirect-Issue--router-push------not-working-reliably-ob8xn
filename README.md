# Next.js Redirect Issue: router.push('/')

This repository demonstrates a common issue in Next.js applications where using `router.push('/')` for redirection doesn't always function correctly, particularly during the initial client-side render. The redirect might fail or lead to unexpected behavior.  The solution provides a more reliable method for achieving redirection.

## Bug Description

When navigating from a page (e.g., `/about`) to the home page (`/`) using `router.push('/')`, the redirect might not happen consistently. This is especially noticeable when dealing with client-side transitions and initial page loads.

## Solution

The provided solution uses `router.replace()` to replace the current entry in the browser history, which offers more predictable results in Next.js navigation scenarios.