# GA4 / GTM dataLayer Events

The site uses the existing Google Tag Manager container in `index.html`.
Do not add a direct GA4 `gtag.js` script unless the GTM setup changes.

## Events

- `phone_click`: pushed when a visitor clicks a `tel:+12157108781` link.
- `sms_click`: pushed when a visitor clicks an `sms:+12157108781` link.
- `inspection_cta_click`: pushed when a visitor clicks a link to `/free-inspection` or `#request-inspection`.
- `reviews_click`: pushed when a visitor clicks a Google Reviews / Google Maps review link.
- `form_submit_success`: pushed only after the contact form API request succeeds.

## Privacy

Do not send name, phone, email, or message text to GA4.
The form success event sends only safe lead context:

- `service`
- `zip`
- `source_page`
- current page fields such as `page_path`, `page_url`, and `landing_page`

## Manual Check

1. Open the site in a browser.
2. Open DevTools Console.
3. Click a phone, text, inspection, or reviews CTA.
4. Run:

```js
window.dataLayer?.filter((item) => item.event)
```

For form testing, submit the form with test contact details only when the backend should receive a real test lead.
