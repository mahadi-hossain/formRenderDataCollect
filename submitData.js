function submitData(){
       var formGroup = $('.form-group');

       var data = [];

       var input = null;
       for(var i=0;i<formGroup.length;i++){
           var field = formGroup[i];
           var label = $(field).children('label')

           if($(field).hasClass('formbuilder-radio-group')){

                var radioData = null;
                var radio_group =$(field).children('.radio-group')[0];
                var formbuilder_radios = $(radio_group).children('.formbuilder-radio')
                for(var x =0; x<formbuilder_radios.length;x++){
                    var radio_input =  $(formbuilder_radios[x]).children('input')[0];
                    var radio_label =  $(formbuilder_radios[x]).children('label')[0];

                    if($(radio_input).is(':checked')){

                     radioData = $(radio_label).text()+" ("+$(radio_input).val()+")";
                    }
                }

                var obj = {
                               label:$(label).text(),
                               value:radioData
                           }

                data.push(obj);

           }else if($(field).hasClass('formbuilder-checkbox-group')){
                var checkboxData = [];
                var checkbox_group =$(field).children('.checkbox-group')[0];
                var formbuilder_checkboxs = $(checkbox_group).children('.formbuilder-checkbox')
                for(var x =0; x<formbuilder_checkboxs.length;x++){
                    var checkbox_input =  $(formbuilder_checkboxs[x]).children('input')[0];
                    var checkbox_label =  $(formbuilder_checkboxs[x]).children('label')[0];

                    if($(checkbox_input).is(':checked')){

                     checkboxData.push($(checkbox_label).text()+" ("+$(checkbox_input).val()+")");
                    }
                }

                var obj = {
                               label:$(label).text(),
                               value:checkboxData
                           }

                data.push(obj);

           }else{
                input =  $(field).children('input')[0] || $(field).children('select')[0] ||
                                               $(field).children('textarea')[0];

                var obj = {
                               label:$(label).text(),
                               value:$(input).val()
                           }

                data.push(obj);
           }


       }
    }
