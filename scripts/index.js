$(document).ready(function () {
    // QoL, Select on focus
    $("input[type='text']").focus(function () {
        $(this).select();
    });

    // Generate password
    $("#generate").click(function () {
        let service = $("#website").val();
        let master = $("#master-key").val();

        $("#output").val("!SYN?" + hex_md5(master + service).substr(7, 12));
    });

    // QoL, Copy to clipboard feature
    $("#copy").click(function () {
        if ($("#output").val().length > 0) navigator.clipboard.writeText($("#output").val());
        document.getElementById("output").classList.add("copy-confirm");
        setTimeout(function () {
            document.getElementById("output").classList.remove("copy-confirm");
        }, 1000);
    });
});