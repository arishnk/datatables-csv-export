$.fn.dataTableExt.oApi.fnCSVExport = function (oSettings) {
        
      var csvData = "",
          csvCols = "";

      for (var i = 0, iLen = oSettings.aoColumns.length ;  i < iLen ; i++) {
          
          csvCols += '"' + oSettings.aoColumns[i].sTitle + '",';
          
      }    
      
	for (var i = 0, iLen = oSettings.aoData.length ; i < iLen ; i++) {
          
          for (var j = 0, jLen = oSettings.aoColumns.length ; j < jLen ; j++) {
              
              csvData += '"' +
                  (oSettings.aoData[i]._aData[j] === undefined ? '' : oSettings.aoData[i]._aData[j])  +
                  (j+1 == jLen && i+1 == iLen ? '"' : '",');
              
          }
          
          csvData += '\n';
          
      }
          
      var csvBlob = new Blob([csvCols + '\n' + csvData], { type: 'text/csv' });
      var fileName = $(oSettings.nTable).find('caption').text().replace(/[^a-zA-Z0-9_\-\s]/g, '') + '.csv';
      saveAs(csvBlob, fileName);
	
}
