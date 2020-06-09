
// an array of different wines and their names, grape color, price (at the LCBO), sweetness, an image, and description
const wines = [
        {
            title: 'Toro Bravo Tempranillo Merlot',
            color: 'red',
            price: 8.15,
            sweet: 'false',
            url: 'https://www.lcbo.com/content/dam/lcbo/products/635755.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg',
            description: "At one point this wine sold out of the LCBO because it's that good. This wine is SO well balanced (tannin, acidity, fruitiness, the whole shebang). It's an $8 wine that tastes like a $50 wine.",
            alt: "A picture of a dark red bottle of wine wine an orange cap. The label has a bull on it."
        },
        {
            title: "Boone's Sangria",
            color: 'red',
            price: 7.95,
            sweet: 'true',
            url: 'https://www.lcbo.com/content/dam/lcbo/products/419317.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg',
            description: "So this isn't exactly wine but if you're looking for a sweet, red wine under $10 you're probably actually looking for sangira, so here you go. This is 100% the best pre-bottled sangria you can buy. Throw some frozen fruit in if you're feeling fancy.",
            alt: "A picture of a dark purple bottle of wine. The label has oranges and grapes on it."
        },
        {
            title: 'Vinologist Cabernet Sauvignon',
            color: 'red',
            price: 12.95,
            sweet: 'false',
            url: 'https://www.lcbo.com/content/dam/lcbo/products/010416.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg',
            description: "Really great wine at a really great price point. It has a unique, chocolate-forward palette that will surely impress even the finest sommeliers.",
            alt: "A picture of a dark red bottle of wine with a bright red cap. The label has a cartoon image of a man, facing backwards trimming grape vines."
        },
        {
            title: 'Negrar Appassimento Veneto IGT',
            color: 'red',
            price: 14.95,
            sweet: 'true',
            url: 'https://www.lcbo.com/content/dam/lcbo/products/629865.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg',
            description: 'This wine is fruity and delicious and the description on the LCBO website literally says "Serve with pizza" so let\'\s just leave it at that.',
            alt: "A picture of a dark red bottle of wine with a copper cap. The label features abstract imagery in warm color tones."
        },
        {
            title: 'Sogrape Gazela Vinho Verde',
            color: 'white',
            price: 9.95,
            sweet: 'true',
            url: 'https://www.lcbo.com/content/dam/lcbo/products/141432.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg',
            description: 'This wine is crisp, lightly citrus, dry without being too dry, and has just a lil bit of fizz. So good! Fun fact: the fizz is not necessarily natural, but Vinho Verde but has come to be known for its fizz so nowadays most wine makers will add it through a boost of CO2.',
            alt: "A pale green bottle of wine with a bright green lid. The label features 4 icons: 1) grapes 2) 2 glasses of wines 3) speech bubbles 4) 3 people embracing"
        },
        {
            title: 'Sandbanks Riesling',
            color: 'white',
            price: 14.95,
            sweet: 'true',
            url: 'https://www.lcbo.com/content/dam/lcbo/products/139022.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg',
            description: "The actual sugar content of this wine is pretty high at 24 g/L but it's not overpowering at all. Not sure how this wine manages to be so well balanced, but it does. No bready flavours and plenty of peach, pear, and apricot goodness. Smooth and aromatic finish.",
            alt: "A clear bottle with pale yellow wine and an orange lid. The label features an orange arrow-shaped sign with the word \"\Beach\"\ written on it."
        },
        {
            title: 'Villa Maria Private Bin Sauvignon Blanc',
            color: 'white',
            price: 17.95,
            sweet: 'false',
            url: 'https://www.lcbo.com/content/dam/lcbo/products/426601.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg',
            description: 'Super citrus-y and insanely refreshing. Like probably the closest thing to drinking water while still being 13% alcohol. This wine was made for picnics, patios, balconeys, or wherever else you can appropriately drink under some sunshine.',
            alt: 'A picture of a dark green bottle of wine with a white label featuring the text "Villa Maria" and "Sauvignon Blanc"'
        },
        {
            title: 'Mission Hill Five Vineyards Sauvignon Blanc',
            color: 'white',
            price: 9.95,
            sweet: 'false',
            url: 'https://www.lcbo.com/content/dam/lcbo/products/145086.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg',
            description: 'Not your typical cheap white wine - lots of tropical flavors and no "bready" taste. The current owner of Mission Hill winery also founded Mike\'\s Hard Lemonade, so you know this guy knows his way around a good drink.',
            alt: 'A clear bottle with pale yellow wine and a black lid. The label features a large, black "5".'
        },
        {
            title: 'Lab Rosé Lisboa VR',
            color: 'rose',
            price: 9.95,
            sweet: 'false',
            url: 'https://www.lcbo.com/content/dam/lcbo/products/632513.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg',
            description: "Crisp and refreshing with just a hint of strawberry flavours. Would be great with oysters. Perfect for those who don't want to feel like their drinking watermelon juice when they drink rosé.",
            alt: "A clear bottle with pale pink wine and a pink lid. The label features the outline of a Labrador Retriever that is colored pink."
        },
        {
            title: 'Barefoot Cellars Pink Pinot Grigio',
            color: 'rose',
            price: 9.95,
            sweet: 'true',
            url: 'https://www.lcbo.com/content/dam/lcbo/products/639971.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg',
            description: "This is for all you folks who really just want to drink Barefoot Pink Moscato (a.k.a. watermelon juice) but are no longer under the age of 20.",
            alt: "A clear bottle with a pale pink wine and a metallic pink lid. The label features a pink footprint."
        },
        {
            title: 'Flat Rock Pink Twisted Rosé',
            color: 'rose',
            price: 17.95,
            sweet: 'true',
            url: 'https://www.lcbo.com/content/dam/lcbo/products/039974.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg',
            description: "Strong red fruit flavors (think strawberries, cherries, raspberries) are well balanced with aromatic, floral flavors. If sweet and savory were a wine, this would be it.",
            alt: "A dark pink wine bottle witha  black lid. The label features the wine name."
        },
        {
            title: 'La Vielle Ferme Rosé Ventoux AOC',
            color: 'rose',
            price: 12.45,
            sweet: 'false',
            url: 'https://www.lcbo.com/content/dam/lcbo/products/622134.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg',
            description: "This wine is quite tart with some very, very light strawberry notes. It's delicate and balanced. Also, rosé from France just feels right.",
            alt: "A picture of a clear bottle with a pale pink wine and pink lid. The label features a chicken and a rooster."
        }   
];

const wineRecoApp = {};

//move the user through the form and to their results as they check options
wineRecoApp.autoScrolling = function() {

    // move the user from the landing page to the first question
    $('header button').click(function () {
        $('html, body').animate({
            scrollTop: $('#q1').offset().top
        });
    })

    // allows the user to select an option without clicking and still experience the auto scroll, particularly for users who do not use a mouse
    $('input[name=color]').keypress(function (event) {
        if (event.which == 32) {
            $('html, body').animate({
                scrollTop: $('#q2').offset().top
            });
        }
    })

    // triggers auto scroll when user clicks a selection    
    $('.wineColorForm').mousedown(function () {
            $('html, body').animate({
                scrollTop: $('#q2').offset().top
            });
    })
    

    $('input[name=price]').keypress(function () {
        if (event.which == 32) {
            $('html, body').animate({
                scrollTop: $('#q3').offset().top
            });
        }
    })

    $('.priceForm').mousedown(function () {
        $('html, body').animate({
            scrollTop: $('#q3').offset().top
        });
    })

    $('input[name=sugarLevel]').keypress(function () {
        if (event.which == 32) {
            $('html, body').animate({
                scrollTop: $('#submit').offset().top
            });
        }      
    })

    $('.sugarForm').mousedown(function () {
        $('html, body').animate({
            scrollTop: $('#submit').offset().top
        });
    })

    // moves the user to the section where they will see their result
    $('form').submit(function () {
        $('html, body').animate({
            scrollTop: $('#results').offset().top
        });
    })

    // moves the user back to question #1 so they can go through the questions again and change options as they wish
    $('.tryAgain button').click(function () {
        $('html, body').animate({
            scrollTop: $('#q1').offset().top
        });
    })
}

//filter through the list of wines based on the options the user checked and present a recomnendation
wineRecoApp.getWineReco = function() {

    //when form is submitted...
    $('form').on('submit', function (e) {
    //prevent default form behaviour
    e.preventDefault();

    //get the values of selected radio options
    let colorPref = $('input[name=color]:checked').val();
    let pricePref = $('input[name=price]:checked').val();
    let sugarPref = $('input[name=sugarLevel]:checked').val();

    //alert in case the user did not select a value for one of the sections
    if (colorPref == undefined || pricePref == null || sugarPref == undefined) {
        swal({
            title: "Hmm that's not working...",
            text: "Please make sure you've selected a color preference, price preference, and sweetness preference!",
            button: "Ok, will do",
            closeOnClickOutside: false,
        });
    }
    
    //get an array of wines that match the selected radio options
    const wineRecoList = wines.filter((value) => {
        return value.price < pricePref 
        && value.price > (pricePref - 10)
        && value.sweet == sugarPref 
        && value.color == colorPref
    });

    //loop through the array of wines and display a recommendation to the user
    wineRecoList.forEach(function (wine) {
        const userWineImg = $('<img>').addClass('resultImg').attr('src', `${wine.url}`).attr('alt', `${wine.alt}`);
        const userWineTitle = $('<h2>').addClass('resultTitle').text(`${wine.title}`);
        const userWineInfo = $('<p>').addClass('resultInfo').text(`${wine.description}`);
        const userWinePrice = $('<p>').addClass('resultPrice').text(`$${wine.price}`);
        const userWineText = $('<div>').addClass('userWineText').append(userWineTitle, userWineInfo, userWinePrice);
        const userWine = $('<div>').addClass('userWine').append(userWineImg, userWineText);
        const showResult = $('.results .subWrapper').html(userWine);
    });
});
}

wineRecoApp.init = function() {
    wineRecoApp.autoScrolling();
    wineRecoApp.getWineReco();
}

//document ready
$(function() {
    wineRecoApp.init();
})