function add_user(
        personalEmail, 
        emailAddress, 
        firstName, 
        preferedName, 
        lastName, 
        school, 
        reference
) {     
        var fileReader = new FileReader();
        fileReader.onload = function (file) {
                var fileContents = file.target.result;
                var userArray = JSON.parse(fileContents);
                userArray += {
                        personalEmail,
                        emailAddress,
                        firstName,
                        preferedName,
                        lastName,
                        school,
                        reference
                };

                var a = document.createElement("a");
                var file = new Blob(
                        [JSON.stringify(userArray)], 
                        { type: "application/json" }
                );
                a.href = URL.createObjectURL(file);
                a.download = "user."
        }
        fileReader.readAsText(setupData["dataFile"]);
}

function save_user_data(data) {
}