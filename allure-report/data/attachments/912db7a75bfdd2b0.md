# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - heading "Feedback Form" [level=1] [ref=e2]
  - generic [ref=e3]:
    - paragraph [ref=e4]: Please fill out the Feedback Form below to provide your feedback. Your input is valuable to us and helps us improve our services.
    - generic [ref=e5]: "Name (required):"
    - textbox "Name (required):" [ref=e6]
    - generic [ref=e7]: "Email (required):"
    - textbox "Email (required):" [ref=e8]
    - generic [ref=e9]: "Comment (required):"
    - textbox "Comment (required):" [ref=e10]
    - generic [ref=e11]: "Event Highlights (optional):"
    - textbox "Event Highlights (optional):" [ref=e12]
    - generic [ref=e13]: "Areas for Improvement (optional):"
    - listbox "Areas for Improvement (optional):" [ref=e14]:
      - option "Content" [ref=e15]
      - option "Presentation" [ref=e16]
      - option "Timing" [ref=e17]
      - option "Others" [ref=e18]
    - checkbox "I agree to the site's Terms of Service" [ref=e19]
    - generic [ref=e20]:
      - text: I agree to the site's
      - link "Terms of Service" [ref=e21] [cursor=pointer]:
        - /url: TermsOfService.html
    - button "Submit" [ref=e22] [cursor=pointer]
    - button "Save Progress" [ref=e23] [cursor=pointer]
    - button "Clear Progress" [ref=e24] [cursor=pointer]
```