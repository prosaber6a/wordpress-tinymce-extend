// alert('ok')

;(function () {
    tinyMCE.PluginManager.add('tmce_extd_plugin', function (editor, url) {
        editor.addButton('tmce_extd_button_one', {
            // text: 'B1',
            // icon: "drop",
            image: url + "/../images/cart.png",
            onclick: function () {
                editor.insertContent("Hello World");
            }
        });
    });
})()