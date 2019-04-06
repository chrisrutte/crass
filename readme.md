# crass: quickly change your Google Sheet into a database
Crass is quick way to change your Google Sheet into a safe, writable and readable database that can be accessed via the browser.
Crass uses Google Apps Script.

With this in place you can avoid people making changes in your sheet that don't meet your requirements :)

# Installation

Clone the repo to a new Google Apps Script project

# Usage

Make sure the your Google Sheet has one column with a unique identifier. Rename this field to `_id`

Add the id of the Google Sheet in `config.js`. You can find the id in the URL of your Sheet

    var config = {
      "dbid": '<<your sheet_id>>'
    }

Add the name of the tab in `app.js`

    var sheet = 'customers'

Add the fields that you want to show in your overview in `view.html` by adding lines like:

    <td><?= object[i].age ?></td>

Add the fields that you want users to be able to create to `new.html` by adding lines like:

    <input id="field_name" type="text" name="field_name">
    <label for="field_name">Field name</label><br><br> 

Add the fields that you want users to be able to update to `update.html` by adding lines like:

    <input id="field_name" type="text" name="field_name" value="<?!= object.field_name ?>">
    <label for="field_name">Field_name</label><br><br> 

Deploy your script as Web App under a new version

Click on 'test your web app for the latest code' to see your database.

# Validation

If you want to add validation/manipulation to your create and update you can add this in `validate.js`. Add a block for your sheet, add checks, and specify error messages. The error messages will show up in the form.

  if (sheet === 'customers') {
    if (!object.name) {throw 'Please provide a name'}
    
    object.name = object.name.trim()
  }

  # FAQ

  To be written, but feel free to log any issues that you have. 
