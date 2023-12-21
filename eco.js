console.log('hello')


const Lipropos = document.querySelector('.A-propos');
const ul = document.querySelector('.contianer-For-Listes')
const ulgrand = document.querySelector('.ul')
const span = document.querySelector('body > div > nav > div.container-Listes > ul > li.A-propos > div.container-Li-span > span > i')
const menu = document.querySelector('.icon-menu')
    // const ul2    = document.querySelector('.ul')
function block() {
    ul.style.display = 'block'
    span.style.transform = 'rotate(180deg)';
    span.style.transition = 'all .4s';
}

function none() {
    ul.style.display = 'none'
    span.style.transform = 'rotate(0deg)';
    span.style.transition = 'all .4s';
}

function blockBack() {


    ulgrand.classList.toggle('active')
    if (ulgrand.classList.contains('active')) {
        ulgrand.style.display = 'flex';
        setTimeout(() => {
            ulgrand.style.transform = 'translateX(-47.4%)'
            ulgrand.style.transition = 'all .5s';
        }, 20);
    }

    if (!ulgrand.classList.contains('active')) {
        console.log(true)
        ulgrand.style.transform = 'translateX(65%)'
        ulgrand.style.transition = 'all .5s';
        setTimeout(() => {
            ulgrand.style.display = 'none';
        }, 100);
    }
}

Lipropos.addEventListener('mousemove', block)
Lipropos.addEventListener('mouseout', none)
menu.addEventListener('click', blockBack)


// =====header===
// =====header===

const img = document.querySelector('.image')
const arryImge = [`f4.jpg`, `f6.jpg`, `f8.jpg`, `n2.jpg`]

let i = 0

function transform() {

    img.src = arryImge[i]
    console.log(i)
    if (i < arryImge.length - 1) {

        i++

    } else {
        i = 1
    }
    // console.log(i)
}


setInterval(() => {
    //   transform()  
}, 2000);

const div = document.querySelector('.background')

function images() {
    const image = div.querySelector('.container-mage').getElementsByTagName('img')[0]
    console.log(image)
    image.src = img.src
    div.style.display = 'block'
    console.log(i)
}
const Next = document.querySelector('.iconnss')
img.addEventListener('click', (eo) => {
    console.log(img.src)
    images()
})

Next.addEventListener('click', (eo) => {

    i++
    console.log(i)
    pre.removeAttribute('disabled')
    const image = div.querySelector('.container-mage').getElementsByTagName('img')[0]
    console.log(image)
    image.style.opacity = `0`
    setTimeout(() => {
        image.src = arryImge[i]

        image.style.opacity = `1`
        image.style.transition = `all 1s`
    }, 400);

    if (i < arryImge.length - 1) {

    } else {
        console.log(true)
        Next.setAttribute('disabled', '')
    }



})


const pre = document.querySelector('.iconns');
pre.setAttribute('disabled', '')
pre.addEventListener('click', (eo) => {
    Next.removeAttribute('disabled')
        // console.log(i)
    i--
    console.log(i)
    const image = div.querySelector('.container-mage').getElementsByTagName('img')[0]
    console.log(image)
    image.style.opacity = `0`
    setTimeout(() => {
        image.src = arryImge[i]

        image.style.opacity = `1`
        image.style.transition = `all 1s`
    }, 400);

    if (i == 0) {
        pre.setAttribute('disabled', '')
    }

})

//=== main===
//=== main===


const allDiv = document.querySelectorAll('.relative')
const backo = document.querySelectorAll('.backo')
const relative = document.querySelectorAll('.relative')
const allImages = document.querySelectorAll('.imagess')
console.log(allDiv)
let indo =

    allDiv.forEach((imgEvent, index) => {

        imgEvent.addEventListener('mouseover', (eo) => {
            console.log(indo)
            console.log(backo[index].style.display = 'block')
        })


        imgEvent.addEventListener('mouseleave', (eo) => {
            console.log(backo[index].style.display = 'none')
            indo = index
            console.log(indo)
        })



    });







// ==selec==
// ==selec==
const container = document.querySelector('body > section.container-all-select')
const select = document.querySelector('body > section.container-all-select > div.container-select > div.div2 > select')
const imgg = document.querySelector('body > section.container-all-select > div.container-select > div:nth-child(1) > img')
console.log(imgg)
console.log(select.querySelector('#option1'))
const option1 = select.querySelector('#option1')
console.log(option1)
select.addEventListener('click', (eo) => {


    if (select.value == '1') {
        console.log(true)

    } else {
        console.log(false)
    }


})

const imageses = document.querySelectorAll('.imageses')
console.log(imageses)
imageses.forEach(imgclick => {
    imgclick.addEventListener('click', (eo) => {
        console.log(imgclick.src)
        imgg.src = imgclick.src;

        console.log(container)
    })
});

const arraySousImages =


    [{
        image1: 'n7.jpg',
        image2: 'f8.jpg'
    }, {
        image1: 'f4.jpg',
        image2: 'f6.jpg',
    }, {
        image1: 'f1.jpg',
        image2: 'f4.jpg',
    }, {
        image1: 'f4.jpg',
        image2: 'f1.jpg',
    }, {
        image1: 'f1.jpg',
        image2: 'f7.jpg',
    }, {
        image1: 'n7.jpg',
        image2: 'f8.jpg',
    }]


const Price = document.querySelector('.Price')
const ArrayPrice = ['19.99 €', '23.20 €', '26.99 €', '30.99 €', '32.99 €', '35.99 €']
const image111 = document.querySelector('.Image11')
const image222 = document.querySelector('.Image22')

const pris = document.querySelector('.pres')
const suivant = document.querySelector('.suivant')
pris.setAttribute('disabled', '')
relative.forEach((divClick, index) => {

    divClick.addEventListener('click', (eo) => {
        suivant.removeAttribute('disabled')
        pris.removeAttribute('disabled')
        container.style.display = `block`
        console.log(index)
        const imagee = divClick.querySelector('.imagess')
        console.log(imagee)
        imgg.src = imagee.src
        image111.src = arraySousImages[index].image1
        image222.src = arraySousImages[index].image2
        Price.innerText = ArrayPrice[index]
        console.log(index)
        inde = index
        console.log(inde)
        if (index >= 5) {
            suivant.setAttribute('disabled', '')
        }
        if (index <= 0) {
            pris.setAttribute('disabled', '')
        }
    })

});

const Allimages = document.querySelectorAll('.imagess')
let inde = 0
console.log(inde)

function add() {
    console.log(imgg.src = Allimages[inde].src)
    image111.src = arraySousImages[inde].image1
    image222.src = arraySousImages[inde].image2
    Price.innerText = ArrayPrice[inde];
}


suivant.addEventListener('click', (eo) => {
    BTNajouterAuPanier.removeAttribute('disabled')
    pris.removeAttribute('disabled')
    inde++
    console.log(inde)
    add()
    if (inde == 5) {
        suivant.setAttribute('disabled', '')
    } else {
        suivant.removeAttribute('disabled')
    }
})
pris.addEventListener('click', (eo) => {
    if (imgg.src) {
        console.log('yes')
    }
    BTNajouterAuPanier.removeAttribute('disabled')
    suivant.removeAttribute('disabled')
    inde--
    console.log(inde)
    add()
    if (inde == 0) {
        pris.setAttribute('disabled', '')
    }
})




const clos = document.querySelector('body > section.container-all-select > div:nth-child(1) > span.close')


clos.addEventListener('click', (eo) => {
    container.style.display = 'none'
})

// const po = document.querySelector('.po')
// const divSprite = document.querySelector('.divSprite')
// divSprite.addEventListener('mouseover', e => {

//     // po.style.transform = `scale(0)`
//     divSprite.classList.add('activeo')
//     console.log(divSprite)
//     divSprite.innerHTML = inner
//     // console.log(inner)
// divSprite.addEventListener('mouseleave', (eo) => {

//     divSprite.classList.remove('activeo')
//     console.log(divSprite)
//     divSprite.innerHTML = p


// })


// })
// const inner = `<div class='display'>
// <div class='container-sprite'>
// <p class=para> a sprite is pancile the me there isn't muche time <p> 
//                 <h1 class='header'>Sprite</h1>
//                 <button>Sin Up</button> 
//                 </div>

//                 <img class='imageg' src='R.png'>

//                 </div>
//                 `
// const p = `<p class="po">Sprite</p>`


// 






// 




/* ===voir le panier====== */
/* ===voir le panier====== */
/* ===voir le panier====== */

const parentt = document.querySelector('.container-articles')
const closee = document.querySelector('.close-div')
const allContainer = document.querySelector('.container-section')
const BTNajouterAuPanier = document.querySelector('.Add')
const containerall = document.querySelector('.all-container')
const closeVoirlepanier = document.querySelector('body > div.container-section > section > div.divp > div > span > i')
const btnVoirArtivles = document.querySelector('body > section.container-all-select > div:nth-child(1) > div > button')
console.log(allContainer)
const PriceVoir = document.querySelector('.PriceVoir')
const divSelect = document.querySelector('.container-select')
console.log(divSelect)





BTNajouterAuPanier.addEventListener('click', (eo) => {



    //    if(imgg.src==)

    const inpu = document.querySelector('.input').value
    console.log(inpu)



    console.log(imgg.src)
    BTNajouterAuPanier.setAttribute('disabled', '')

    const divImagee = ` 
    <div id="divmose" class="container-Imag-input">
            <img class="iimage" src="${imgg.src}">
            <div class="container-cout-image">
                <div class="container-parole-close">
                <p>Nom d'article</p>
                <b class="praso">${Price.innerText}</b><br>
                <input id="input" type="Number" name="Number" min="1" value='${inpu}'>
               </div>
               <div class="container-close">
                   <span class="close-div">&#10005;</span>
               </div>
            </div>
        </div>
               `

    allContainer.style.display = 'block'

    //  if(imgg.src==imagVoir.src){
    //     console.log('vrai')
    // }
    console.log(imgg.src)


    allContainer.style.opacity = '1'
    console.log('click')
    containerall.style.transform = 'translateX(0%)'


    parentt.innerHTML += divImagee;






    setTimeout(() => {

        total()
    }, 500);




})





function total() {
    let total = 0
    console.log(total)
    const all = parentt.querySelectorAll('.container-Imag-input')
    all.forEach((div, index) => {
        //    console.log(index)
        console.log(div)
        const divparol = div.querySelector('.container-parole-close')
        console.log(divparol)
        const input0 = parseInt(divparol.querySelector('#input'))
        console.log(input0)
        const input = parseInt(divparol.querySelector('#input').value)
        console.log(input)
        const price = parseFloat(divparol.getElementsByTagName('b')[0].innerText)
        console.log(price)

        total = total + (input * price)
        console.log(total)
        PriceVoir.innerText = `${total}€`



    });


}


containerall.addEventListener('change', (eo) => {
    let total = 0
    console.log(total)
    const all = parentt.querySelectorAll('.container-Imag-input')
    all.forEach((div, index) => {
        console.log(div)
        const divparol = div.querySelector('.container-parole-close')
        console.log(divparol)

        const input0 = (divparol.querySelector('#input'))
        console.log(input0)

        let di = input0.getAttribute('value')
        console.log(di)

        const input = parseInt(divparol.querySelector('#input').value)
        console.log(input)
        const price = parseFloat(divparol.getElementsByTagName('b')[0].innerText)
        console.log(price)
        console.log(di = input)
        console.log(input0.value = `${di}`)
        console.log(input0)
        total = total + (input * price)
        console.log(total)
        PriceVoir.innerText = `${total}€`

        console.log(input.value)

    });

})










console.log(closee)
parentt.addEventListener('click', (eo) => {

    if (eo.target.classList.contains('close-div')) {
        BTNajouterAuPanier.removeAttribute('disabled')
        console.log(true)
        const div = eo.target.parentElement.parentElement.parentElement
        console.log(div)
        div.remove()
        total()
    }

    if (parentt.innerText == '') {
        console.log(true)
        const NextElement = parentt.nextElementSibling

        NextElement.innerHTML = `<P class='said'>le Panier est Vide`
    }

})
const containermageName = document.querySelector('.container-mag-Nome')
parentt.addEventListener('mouseover', (eo) => {
    if (eo.target.classList.contains("container-Imag-input")) {
        console.log(true)
        const Close = eo.target.querySelector('.close-div')
        console.log(Close)
        Close.style.opacity = '1'
        Close.style.visibility = 'inherit'


    }

})

closeVoirlepanier.addEventListener('click', (eo) => {
    allContainer.style.opacity = `0`
    allContainer.style.transition = `all 1s`
    setTimeout(() => {
        allContainer.style.display = `none`
    }, 500);

    containerall.style.transform = `translate(120%)`;

})

btnVoirArtivles.addEventListener('click', (eo) => {
    allContainer.style.display = 'block'


    setTimeout(() => {
        allContainer.style.opacity = '1'
        console.log('click')
        containerall.style.transform = 'translateX(0%)'
            //    parentt.innerHTML += divImagee; 
    }, 300);
})