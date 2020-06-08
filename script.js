const wines = [
        {
            title: 'Toro Bravo Tempranillo Merlot',
            color: 'red',
            price: 8.15,
            sweet: 'false',
            url: 'https://www.lcbo.com/content/dam/lcbo/products/635755.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg',
            description: "At one point this wine sold out of the LCBO because it's that good. This wine is SO well balanced (tannin, acidity, fruitiness, the whole shebang). It's an $8 wine that tastes like a $50 wine."
        },
        {
            title: "Boone's Sangria",
            color: 'red',
            price: 7.95,
            sweet: 'true',
            url: 'https://www.lcbo.com/content/dam/lcbo/products/419317.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg',
            description: "So this isn't exactly wine but if you're looking for a sweet, red wine under $10 you're probably actually looking for sangira, so here you go. This is 100% the best pre-bottled sangria you can buy. Throw some frozen fruit in if you're feeling fancy."
        },
        {
            title: 'Vinologist Cabernet Sauvignon',
            color: 'red',
            price: 12.95,
            sweet: 'false',
            url: 'https://www.lcbo.com/content/dam/lcbo/products/010416.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg',
            description: "Really great wine at a really great price point. "
        },
        {
            title: 'Negrar Appassimento Veneto IGT',
            color: 'red',
            price: 14.95,
            sweet: 'true',
            url: 'https://www.lcbo.com/content/dam/lcbo/products/629865.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg',
            description: 'Cantina Valpolicella Negrar has been creating superb wines for 85 years. This red is made by drying grapes for a short period of time (appassimento) resulting in a smooth and rich wine. Full-bodied with aromas and flavours of plum, raisins, herbs, and cherry lingering on the finish. Serve with pizza.'
        },
        {
            title: 'Sogrape Gazela Vinho Verde',
            color: 'white',
            price: 9.95,
            sweet: 'true',
            url: 'https://www.lcbo.com/content/dam/lcbo/products/141432.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg',
            description: 'This wine is crisp, lightly citrus, dry without being too dry, and has just a lil bit of fizz. So good! Fun fact: the fizz is not necessarily natural, but Vinho Verde but has come to be known for its fizz so nowadays most wine makers will add it through a boost of CO2.'
        },
        {
            title: 'Sandbanks Riesling',
            color: 'white',
            price: 14.95,
            sweet: 'true',
            url: 'https://www.lcbo.com/content/dam/lcbo/products/139022.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg',
            description: "The actual sugar content of this wine is pretty high at 24 g/L but it's not overpowering at all. Not sure how this wine manages to be so well balanced, but it does. No bready flavours and plenty of peach, pear, and apricot goodness. Smooth and aromatic finish."
        },
        {
            title: 'Villa Maria Private Bin Sauvignon Blanc',
            color: 'white',
            price: 17.95,
            sweet: 'false',
            url: 'https://www.lcbo.com/content/dam/lcbo/products/426601.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg',
            description: 'Pale straw colour; intense aromas of gooseberry, lime, grass and asparagus; dry, medium bodied, crisp acidity, and flavours of bell pepper, gooseberry citrus; clean, crisp finish.'
        },
        {
            title: 'Mission Hill Five Vineyards Sauvignon Blanc',
            color: 'white',
            price: 9.95,
            sweet: 'false',
            url: 'https://www.lcbo.com/content/dam/lcbo/products/145086.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg',
            description: 'Clear pale straw colour with aromas of melon, gooseberry and grapefruit; dry with zingy acidity and flavours of tropical fruit followed by a mellow, slightly grassy finish.'
        },
        {
            title: 'Lab Rosé Lisboa VR',
            color: 'rose',
            price: 9.95,
            sweet: 'false',
            url: 'https://www.lcbo.com/content/dam/lcbo/products/632513.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg',
            description: "Crisp and refreshing with just a hint of strawberry flavours. Would be great with oysters. Perfect for those who don't want to feel like their drinking watermelon juice when they drink rosé."
        },
        {
            title: 'Barefoot Cellars Pink Pinot Grigio',
            color: 'rose',
            price: 9.95,
            sweet: 'true',
            url: 'https://www.lcbo.com/content/dam/lcbo/products/639971.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg',
            description: "This rosé's fruit-forward character is consistent with Barefoot's fun and casual approach to wine and entertaining. Enjoy a drier style of rosé, with flavours of ripe raspberry, peach and crisp apple. Pair with appetizers, salads or your favourite light cuisine."
        },
        {
            title: 'Flat Rock Pink Twisted Rosé',
            color: 'rose',
            price: 17.95,
            sweet: 'true',
            url: 'https://www.lcbo.com/content/dam/lcbo/products/039974.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg',
            description: "You can expect an elegant, stylish, artfully crafted wine with lifted rose petal, juicy red cherry, citrus and a savoury-edged finish. It's always right on the cusp of off-dry, which makes it a great wine for seafood or mildly spiced chicken kebabs."
        },
        {
            title: 'La Vielle Ferme Rose Ventoux AOC',
            color: 'rose',
            price: 12.45,
            sweet: 'false',
            url: 'https://www.lcbo.com/content/dam/lcbo/products/622134.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg',
            description: "Grapes grown on the slopes of France's Mont Ventoux ripen slowly at cooler temperatures, maintaining fruit flavours and crisp acidity. This wine is pale rose in colour, with delicate aromas of raspberry and strawberry. Dry and light-bodied, with citrus and raspberry fruit flavours. Serve chilled with tarragon chicken."
        }   
];

const wineRecoApp = {};

//move the user through the form and to their results as they check options
wineRecoApp.autoScrolling = function() {
    $('header button').click(function () {
        $('html, body').animate({
            scrollTop: $('#q1').offset().top
        });
    })

    $('input[name=color]').keypress(function (event) {
        if (event.which == 32) {
            $('html, body').animate({
                scrollTop: $('#q2').offset().top
            });
        }
    })

    $('.wineColorForm').mousedown(function () {
            $('html, body').animate({
                scrollTop: $('#q2').offset().top
            });
    })
    //add in event listener if input is on focus then callback function find the value of the key that was pressed, get associated key code save value of input in focus

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

    $('form').submit(function () {
        $('html, body').animate({
            scrollTop: $('#results').offset().top
        });
    })

    $('.tryAgain button').click(function () {
        $('html, body').animate({
            scrollTop: $('#q1').offset().top
        });
    })
}

//filter through the list of wines based on the options the user checked and present a recomnendation
wineRecoApp.getWineReco = function() {

    // $('form').keydown(function (event) {
    //     if (event.keyCode == 13) {
    //         event.preventDefault();
    //         return false;
    //     }
    // })

    //when form is submitted...
    $('form').on('submit', function (e) {
    //prevent default form behaviour
    e.preventDefault();

    //get the values of selected radio buttons
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
    
    //get an array of wines that match the selected radio buttons
    const wineRecoList = wines.filter((value) => {
        return value.price < pricePref 
        && value.price > (pricePref - 10)
        && value.sweet == sugarPref 
        && value.color == colorPref
    });

    //loop through the array of wines and display a recommendation to the user
    wineRecoList.forEach(function (wine) {
        const userWineImg = $('<img>').addClass('resultImg').attr('src', `${wine.url}`);
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