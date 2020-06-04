const wines = {
    red: [
        {
            title: 'Toro Bravo Tempranillo Merlot',
            price: 8.15,
            sweet: 'false',
            url: 'https://www.lcbo.com/content/dam/lcbo/products/635755.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg',
            description: 'Hailing from Spain, this blend of merlot and tempranillo is an exceptional value. Ruby red in colour, look for alluring aromas and flavours of plum, cherry, chocolate, earth and a hint of black pepper. Medium bodied and smooth, with a long finish, this is ideal for beef tacos or grilled pork chops beside roasted potatoes.'
        },
        {
            title: "Boone's Sangria",
            price: 7.95,
            sweet: 'true',
            url: 'https://www.lcbo.com/content/dam/lcbo/products/419317.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg',
            description: 'Medium purple colour; Orange, lime aromas and flavours; Sweet, citrus, grapey/blueberry flavours (Red wine with citrus fruit flavours); Lightly carbonated, rounded palate, sweet finish.'
        },
        {
            title: 'Vinologist Cabernet Sauvignon',
            price: 12.95,
            sweet: 'false',
            url: 'https://www.lcbo.com/content/dam/lcbo/products/010416.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg',
            description: "Hailing from South Africa's Stellenbosch area, renowned for world - class cabernet sauvignon, this lush red possesses aromas of dark plum, violet and sweet pipe tobacco and flavours of ripe blueberry, blackcurrant and bramble.Nuances of spice and cocoa linger on the smooth finish.Pair with ribeye steak or grilled mushrooms."
        },
        {
            title: 'Negrar Appassimento Veneto IGT',
            price: 14.95,
            sweet: 'true',
            url: 'https://www.lcbo.com/content/dam/lcbo/products/629865.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg',
            description: 'Cantina Valpolicella Negrar has been creating superb wines for 85 years. This red is made by drying grapes for a short period of time (appassimento) resulting in a smooth and rich wine. Full-bodied with aromas and flavours of plum, raisins, herbs, and cherry lingering on the finish. Serve with pizza.'
        }
    ],
    white: [
        {
            title: 'Sogrape Gazela Vinho Verde',
            price: 9.95,
            sweet: 'true',
            url: 'https://www.lcbo.com/content/dam/lcbo/products/141432.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg',
            description: 'Pale yellow straw colour; light fruit aromas with citrus and mineral notes; dry, light bodied, with delicate fresh fruit flavours; tart and refreshing with a spritzy finish.'
        },
        {
            title: 'Sandbanks Riesling',
            price: 14.95,
            sweet: 'true',
            url: 'https://www.lcbo.com/content/dam/lcbo/products/139022.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg',
            description: 'Clear pale straw colour; classic, soft floral, pear and petrol notes; off-dry, light body; peach and apricot flavours with citrus, clean finish.'
        },
        {
            title: 'Villa Maria Private Bin Sauvignon Blanc',
            price: 17.95,
            sweet: 'false',
            url: 'https://www.lcbo.com/content/dam/lcbo/products/426601.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg',
            description: 'Pale straw colour; intense aromas of gooseberry, lime, grass and asparagus; dry, medium bodied, crisp acidity, and flavours of bell pepper, gooseberry citrus; clean, crisp finish.'
        },
        {
            title: 'Mission Hill Five Vineyards Sauvignon Blanc',
            price: 9.95,
            sweet: 'false',
            url: 'https://www.lcbo.com/content/dam/lcbo/products/145086.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg',
            description: 'Clear pale straw colour with aromas of melon, gooseberry and grapefruit; dry with zingy acidity and flavours of tropical fruit followed by a mellow, slightly grassy finish.'
        }
    ],
    rose: [
        {
            title: 'Lab Rosé Lisboa VR',
            price: 9.95,
            sweet: 'false',
            url: 'https://www.lcbo.com/content/dam/lcbo/products/632513.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg',
            description: "Made from grapes grown near Portugal's capital of Lisbon.The nearby Atlantic Ocean moderates temperatures, yielding wines with freshness and lively flavours.A blend of cabernet sauvignon and local red varieties, this rosé is brimming with aromas and flavours of ripe red fruit.Pair with seafood, shellfish or rice dishes."
        },
        {
            title: 'Barefoot Cellars Pink Pinot Grigio',
            price: 9.95,
            sweet: 'true',
            url: 'https://www.lcbo.com/content/dam/lcbo/products/639971.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg',
            description: "This rosé's fruit-forward character is consistent with Barefoot's fun and casual approach to wine and entertaining. Enjoy a drier style of rosé, with flavours of ripe raspberry, peach and crisp apple. Pair with appetizers, salads or your favourite light cuisine."
        },
        {
            title: 'Flat Rock Pink Twisted Rosé',
            price: 17.95,
            sweet: 'true',
            url: 'https://www.lcbo.com/content/dam/lcbo/products/039974.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg',
            description: "You can expect an elegant, stylish, artfully crafted wine with lifted rose petal, juicy red cherry, citrus and a savoury-edged finish. It's always right on the cusp of off-dry, which makes it a great wine for seafood or mildly spiced chicken kebabs."
        },
        {
            title: 'La Vielle Ferme Rose Ventoux AOC',
            price: 12.45,
            sweet: 'false',
            url: 'https://www.lcbo.com/content/dam/lcbo/products/622134.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg',
            description: "Grapes grown on the slopes of France's Mont Ventoux ripen slowly at cooler temperatures, maintaining fruit flavours and crisp acidity. This wine is pale rose in colour, with delicate aromas of raspberry and strawberry. Dry and light-bodied, with citrus and raspberry fruit flavours. Serve chilled with tarragon chicken."
        }
    ]
};

//document ready
$(function() {

    $('header button').click(function () {
        $('html, body').animate({
            scrollTop: $('#q1').offset().top
        });
    })

    $('input[name=color]').click(function(){
        $('html, body').animate({
            scrollTop: $('#q2').offset().top});
    })

    $('input[name=price]').click(function () {
        $('html, body').animate({
            scrollTop: $('#q3').offset().top
        });
    })

    $('input[name=sugarLevel]').click(function () {
        $('html, body').animate({
            scrollTop: $('#submit').offset().top
        });
    })

    $('input[type=submit]').click(function () {
        $('html, body').animate({
            scrollTop: $('#results').offset().top
        });
    })

    $('.results button').click(function () {
        $('html, body').animate({
            scrollTop: $('#q1').offset().top
        });
    })

    $('form').on('submit', function(e){ 
        //prevent default form behaviour
        e.preventDefault();
        //get the values of selected radio buttons
        const colorPref = $('input[name=color]:checked').val();
        const pricePref = $('input[name=price]:checked').val();
        const sugarPref = $('input[name=sugarLevel]:checked').val();

        const wineSpecs = wines[colorPref];

        for(let i = 0; i < wineSpecs.length; i++) {
            const wineReco = wineSpecs[i];
            //
            if (wineReco.price < pricePref && wineReco.sweet == sugarPref) {
                $('.resultImg').attr('src',`${wineReco.url}`);
                $('.resultTitle').html(`${wineReco.title}`);
                $('.resultInfo').html(`${wineReco.description}`);
                $('.resultPrice').html(`$${wineReco.price}`);
            }
        }

        
    })

});
