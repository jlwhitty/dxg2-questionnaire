function doPost(e) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var data = JSON.parse(e.postData.contents);
  var survey = data.survey || '';
  var sheet;
  var row;

  if (survey === 'Safety Culture') {
    sheet = ss.getSheetByName('Safety Culture') || ss.insertSheet('Safety Culture');
    // Add headers if sheet is empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Timestamp','Shift','Q1','Q2','Q3','Q4','Q5','Q6','Q7','Q8','Q9','Q10','Q11_Open','Q12_Open']);
    }
    row = [
      data.timestamp || new Date().toLocaleString('en-GB'),
      data.shift || '',
      data.q1  || '', data.q2  || '', data.q3  || '', data.q4  || '', data.q5  || '',
      data.q6  || '', data.q7  || '', data.q8  || '', data.q9  || '', data.q10 || '',
      data.q11 || '', data.q12 || ''
    ];

  } else if (survey === 'Connections & Belonging') {
    sheet = ss.getSheetByName('Connections & Belonging') || ss.insertSheet('Connections & Belonging');
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Timestamp','Shift','Q13','Q14','Q15','Q16','Q17','Q18','Q19','Q20','Q21','Q22','Open1','Open2']);
    }
    row = [
      data.timestamp || new Date().toLocaleString('en-GB'),
      data.shift || '',
      data.q13 || '', data.q14 || '', data.q15 || '', data.q16 || '', data.q17 || '',
      data.q18 || '', data.q19 || '', data.q20 || '', data.q21 || '', data.q22 || '',
      data.q_open1 || '', data.q_open2 || ''
    ];

  } else {
    // Original DXG2 Questionnaire — unchanged
    sheet = ss.getSheetByName('Questionnaire') || ss.getSheets()[0];
    row = [
      data.timestamp || new Date().toLocaleString('en-GB'),
      data.q1  || '', data.q2  || '', data.q3  || '', data.q4  || '', data.q5  || '',
      data.q6  || '', data.q7  || '', data.q8  || '', data.q9  || '', data.q10 || '',
      data.q11 || '', data.q12 || '', data.q13 || '', data.q14 || '', data.q15 || '',
      data.q16 || '', data.q17 || '', data.q18 || '', data.q19 || '', data.q20 || '',
      data.qA  || '', data.qB  || '', data.qC  || '', data.qD  || ''
    ];
  }

  sheet.appendRow(row);
  return ContentService.createTextOutput(JSON.stringify({status: 'ok'}))
    .setMimeType(ContentService.MimeType.JSON);
}
