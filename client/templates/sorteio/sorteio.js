
Template.salvar_sorteio_template.onRendered(()=>{
    $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 15 // Creates a dropdown of 15 years to control year
    });

    $('#div-escolher-numeros2').slideToggle('slow');

});



Template.salvar_sorteio_template.helpers({
    numeros_bolas(jogoArray){
        if(!jogoArray){
            jogoArray = [0,0,0,0,0,0];
        }

        bolas_num = [];

        for(let i=0; i<(jogoArray.length); i++){
            bolas_num[i] = {
                id: "num_"+i,
                posicao: i,
                htmlNum:
                    `<div class="col s11 range-field">

                        <label>${i+1}º Número</label>

                        <div class="col s4">
                            <input  id="num_${i}" name="num_${i}" class="numero_escolhido2" type="number" min="1" max="60" value="${jogoArray[i]}"/>
                        </div>
                    </div>

                    <div class="col s1">
                        <p id="label_num_${i}" class="prefix">0</p>
                    </div>
                    `

            }
        }

        return bolas_num;
    },
});

Template.salvar_sorteio_template.events({
    'submit #js-salvar-sorteio'(){

        let dataSorteio, linkSorteio;
        let numerosSorteados = [];
            dataSorteio = event.target.dataSorteio.value;
            linkSorteio = event.target.link.value;

        $(".numero_escolhido2").each(function(){
                numerosSorteados.push(Number($(this).val()));
        });

        let sorteio = {
            'dataSorteio': dataSorteio,
            'linkSorteio': linkSorteio,
            'numerosSorteados': numerosSorteados.sort()
        }

        Meteor.call("AddSorteio", sorteio, function(error, result){
            if(error){
                console.log("error", error);
            }
            if(result){
                Session.set('sorteioSalvo', true);
            }
        });


        event.target.dataSorteio.value = "";
        event.target.link.value = "";

        $(".numero_escolhido2").each(function(index){
                numerosSorteados.push($(this).val(0));
        });

        return false;
    },
    "click #js-show-add-numeros2":function(){

        $('#div-escolher-numeros2').slideToggle("slow")

    },
    'change .numero_escolhido2': function(event){

		let label_id = 'label_'+$(event.target).attr('id')
		let valor = $(event.target).val();
		$('#'+label_id).text(valor);

	}
});
