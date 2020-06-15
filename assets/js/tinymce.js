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


        editor.addButton('tmce_extd_form', {
           text:'Form',
           onclick: function () {
               editor.windowManager.open({
                   title : 'User Input Form',
                   body: [
                       {
                           type: 'textbox',
                           name: 'userinput1',
                           label: 'Name',
                           value: 'Saber',
                           multiline:true,
                           minHeight: 100
                       },
                       {
                           type: 'colorpicker',
                           name: 'userinput2',
                           label: 'Color',
                           value: '#2d5e6f'
                       },
                       {
                           type: 'listbox',
                           name: 'userinput3',
                           label: 'Fruits',
                           values: [
                               {text: 'Apple', value: 'Apple'},
                               {text: 'Orange', value: 'Orange'},
                               {text: 'Banana', value: 'Banana'},
                           ],
                       }
                   ],
                   onsubmit: (e) => {
                       // console.log(e);
                       editor.insertContent("Your name is " + e.data.userinput1);
                       editor.insertContent("<br>Your favorite color is " + e.data.userinput2);
                       editor.insertContent("<br>Your favorite fruit is " + e.data.userinput3);
                   }

               })
           }
        });


    });
})()