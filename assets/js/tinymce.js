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


        editor.addButton('tmce_extd_button_two', {
            icon: "drop",
            text: "G-Map",
            onclick: () => editor.insertContent('[gmap content=""]')
        });

        editor.addButton('tmce_extd_button_three', {
            type: 'listbox',
            text: 'Select Something',
            values: [
                {text: 'Apple', value: 'You have selected <b>Apple</b>'},
                {text: 'Orange', value: 'You have selected <b>Orange</b>'},
                {text: 'Banana', value: 'You have selected <b>Banana</b>'},
            ],
            onselect: function () {
                editor.insertContent(this.value());
            },
            onPostRender: function () {
                this.value('You have selected <b>Orange</b>');
            }
        });


    });
})()