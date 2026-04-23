# DXG2 Associate Shipment Handling Questionnaire

Anonymous survey for DXG2 associates to provide feedback on shipment handling, training, equipment, and quality practices.

## Live URL
Enable GitHub Pages (Settings → Pages → Source: main branch) to host at:
`https://jlwhitty.github.io/dxg2-questionnaire/`

## How it works
1. Associates open the questionnaire link on any device
2. Responses are submitted via POST to a Google Apps Script
3. Data lands in the linked Google Sheet automatically

## Files
- `index.html` — The questionnaire (single self-contained file, no dependencies)
- `apps-script.js` — Google Apps Script to deploy on the receiving Google Sheet

## Google Sheet Setup
1. Open your Google Sheet
2. Go to Extensions → Apps Script
3. Paste the contents of `apps-script.js`
4. Deploy → New deployment → Web app → Anyone can access
5. Copy the deployment URL into `index.html` (replace the `GOOGLE_SCRIPT_URL` value)

## Questions (20 + 4 open-ended)
| # | Topic | Type |
|---|-------|------|
| Q1–Q3 | About You (shift, tenure, confidence) | Radio |
| Q4–Q7 | Training (Likert 1–5) | Radio |
| Q8 | Training topics needed | Checkbox |
| Q9–Q11 | Daily Practices (Likert 1–5) | Radio |
| Q12 | Handling barriers | Checkbox |
| Q13–Q15 | Equipment & Resources (Likert 1–5) | Radio |
| Q16 | Equipment suggestions | Text |
| Q17–Q19 | Quality Mindset (Likert 1–5) | Radio |
| Q20 | Guidance source | Radio |
| Q-A to Q-D | Open feedback | Text |
