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

        editor.addButton('tmce_extd_listbox', {
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


        editor.addButton('tmce_extd_menu', {
            type:'menubutton',
            text:'Choices',
            menu:[
                {
                    text:'Option A',
                    menu: [
                        {
                            text:'Option A - 1',
                            onclick: () => editor.insertContent('Option A - 1')
                        },
                        {
                            text:'Option A - 2',
                            onclick: () => editor.insertContent('Option A - 2')
                        },
                        {
                            text:'Option A - 3',
                            onclick: () => editor.insertContent('Option A - 3')
                        }
                    ]
                },
                {
                    text:'Option B',
                    onclick:() => console.log("Option B")
                },
                {
                    text:'Option C',
                    menu: [
                        {
                            text:'Option C - 1',
                            onclick: () => editor.insertContent('Option C - 1')
                        },
                        {
                            text:'Option C - 2',
                            onclick: () => editor.insertContent('Option C - 2')
                        },
                        {
                            text:'Option C - 3',
                            menu: [
                                {
                                    text:'Option C - 3 - 1',
                                    onclick: () => editor.insertContent('Option C - 3 - 1')
                                },
                                {
                                    text:'Option C - 3 - 2',
                                    onclick: () => editor.insertContent('Option C - 3 - 2')
                                },
                                {
                                    text:'Option C - 3 - 3',
                                    onclick: () => editor.insertContent('Option C - 3 - 3')
                                }
                            ]
                        }
                    ]
                }
            ]
        });


    });
})()