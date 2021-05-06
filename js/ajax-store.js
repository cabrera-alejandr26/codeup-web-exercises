(function() {
    "use strict";
    // TODO: Create an AJAX GET request for the file under data/inventory.json
    function PowerTools() {
        $("#insertProducts").html("");
        $("#title").html("");
        $("#quant").html("");
        $("#price").html("");
        $("#catg").html("");
        $.ajax("json/inventory.json").done(function(inventory){
            // console.log(inventory);
            for (let j = 0; j < inventory.length; j++) {
                var htmlStr = "<tr id='tool' class='tools'>";
                htmlStr += "<td id='title'>" + inventory[j].title + "</td>";
                htmlStr += "<td id='quant'>" + inventory[j].quantity + "</td>";
                htmlStr += "<td id='price'>" + inventory[j].price + "</td>";
                htmlStr += "<td id='catg'><small>" + inventory[j].categories + "</small></td>";
                htmlStr += "</tr>";
                $('#insertProducts').append(htmlStr);
            }
        });
    }

    $("#the-button").click(PowerTools);
    PowerTools();



    // TODO: Take the data from inventory.json and append it to the products table
    //       HINT: Your data should come back as a JSON object; use console.log() to inspect
    //             its contents and fields
    //       HINT: You will want to target #insertProducts for your new HTML elements
})();