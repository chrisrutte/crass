# crass: quickly change your Google Sheet into a database
Crass is quick way to change your Google Sheet into a safe, writable and readable (CRUD) database that can be accessed via the browser.
Crass uses Google Apps Script.

This is an easy way to move your Google Sheet more towards a database, benefits of this:
* the input can be validated and transformed in any desired way
* default values can be set
* avoids accidentally removing of data
* enforces required fields on new entries
* ability to easily setup notifications if specific fields are changed

# Installation

Clone the repo to a new Google Apps Script project

# Usage

Make sure that your Google Sheet has one column with a unique identifier. Rename this field to `_id`. Besides, your column headers are the fieldNames. So it is recommended to remove spaces and use fieldNames.

Add the id of the Google Sheet in `config.js`. You can find the id in the URL of your Sheet

    var config = {
      "dbid": '<<your sheet_id>>'
    }

Add the name of the sheet in `app.js`. For example:

    var sheet = 'customers'

Add the fields that you want to show in your overview in `view.html` by adding lines like:

    <td><?= object[i].age ?></td>

Add the fields that you want users to be able to create to `new.html` by adding lines like:

    <input id="fieldName" type="text" name="fieldName">
    <label for="fieldName">Field name</label><br><br> 

Add the fields that you want users to be able to update to `update.html` by adding lines like:

    <input id="fieldName" type="text" name="fieldName" value="<?!= object.fieldName ?>">
    <label for="fieldName">Field name</label><br><br> 

Deploy your script as Web App under a new version

Click on `test your web app for the latest code` to see your database.

# Validation

If you want to add validation/manipulation to your create and update you can add this in `validate.js`. Add a block for your sheet, add checks, and specify error messages. The error messages will show up in the form.

    if (sheet === 'customers') {
      if (!object.name) {throw 'Please provide a name'}
    
      object.name = object.name.trim()
    }

  # FAQ

  To be written, but feel free to log any issues that you have. 
