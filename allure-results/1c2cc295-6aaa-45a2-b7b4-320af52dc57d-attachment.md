# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Portico.spec.js >> Portico HRMS Login Test
- Location: tests\Portico.spec.js:129:1

# Error details

```
Error: browserContext.close: Protocol error (Browser.removeBrowserContext): can't access property "_maybeDontRestoreTabs", this._windows[aWindow.__SSi] is undefined
```

# Page snapshot

```yaml
- table [ref=e2]:
  - rowgroup [ref=e3]:
    - 'row "Systems Plus Private Limited Welcome to Portico Employee Self Service Sign in version: 5.41.3.0" [ref=e4]':
      - 'cell "Systems Plus Private Limited Welcome to Portico Employee Self Service Sign in version: 5.41.3.0" [ref=e5]':
        - generic [ref=e7]:
          - img [ref=e10]
          - generic [ref=e11]:
            - generic [ref=e13]:
              - generic [ref=e14]: Systems Plus Private Limited
              - generic [ref=e15]: Welcome to
              - generic [ref=e16]: Portico Employee Self Service
            - button "Sign in" [active] [ref=e19] [cursor=pointer]
            - generic [ref=e20]:
              - iframe [ref=e21]:
                - generic [active] [ref=f1e1]: Copyright © 2026 All Rights Reserved.
              - generic [ref=e22]: "version: 5.41.3.0"
```