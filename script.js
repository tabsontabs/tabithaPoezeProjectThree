const wines = {
    red: [
        {
            title: 'Toro Bravo',
            price: 7.95,
            sweet: 'false'
        },
        {
            title: 'Boones Sangria',
            price: 7.95,
            sweet: 'true'
        },
        {
            title:
            price:
            sweet: 'false'
        },
        {
            title:
            price:
            sweet: 'true'
        }
    ],
    white: [
        {

        },
    ]
};

//document ready
$(function() {

    $('form').on('submit', function(e){ 
        //prevent default form behaviour
        e.preventDefault();
        //get the values of selected radio buttons
        const colorPref = $('input[name=color]:checked').val();
        const pricePref = $('input[name=price]:checked').val();
        const sugarPref = $('input[name=sugarLevel]:checked').val();

        const wineSpecs = wines[colorPref];
        // const options = [];
        //
        for(let i = 0; i < wineSpecs.length; i++) {
            const wineReco = wineSpecs[i];
            //
            if (wineReco.price < pricePref && wineReco.sweet == sugarPref) {
                console.log(wineReco.title)
            }
        }

        
    })

});
