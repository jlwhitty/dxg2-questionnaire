function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);

  var row = [
    data.timestamp || new Date().toLocaleString('en-GB'),
    data.q1  || '',  // Q1_Shift_Pattern
    data.q2  || '',  // Q2_Tenure
    data.q3  || '',  // Q3_Confidence
    data.q4  || '',  // Q4_Training_Sufficient
    data.q5  || '',  // Q5_Damage_Classification
    data.q6  || '',  // Q6_Escalation_Process
    data.q7  || '',  // Q7_SOP_Awareness
    data.q8  || '',  // Q8_Training_Topics_Needed
    data.q9  || '',  // Q9_Visual_Inspection
    data.q10 || '',  // Q10_Team_Lift
    data.q11 || '',  // Q11_Damage_Response
    data.q12 || '',  // Q12_Handling_Barriers
    data.q13 || '',  // Q13_Equipment_Access
    data.q14 || '',  // Q14_Equipment_Condition
    data.q15 || '',  // Q15_Consumables_Access
    data.q16 || '',  // Q16_Equipment_Suggestions
    data.q17 || '',  // Q17_Customer_Impact
    data.q18 || '',  // Q18_Personal_Responsibility
    data.q19 || '',  // Q19_Report_PreExisting_Damage
    data.q20 || '',  // Q20_Guidance_Source
    data.qA  || '',  // QA_Doing_Well
    data.qB  || '',  // QB_Biggest_Change
    data.qC  || '',  // QC_Training_Suggestions
    data.qD  || ''   // QD_Anything_Else
  ];

  sheet.appendRow(row);
  return ContentService.createTextOutput(JSON.stringify({status: 'ok'}))
    .setMimeType(ContentService.MimeType.JSON);
}
