$( document ).ready(function() {
  var TEXT_QUANTITY = 4
  var DELAY_FUNCTION = 5000
  var countText = 0

  $('#intro-text1').hide()
  $('#intro-text2').hide()
  $('#intro-text3').hide()
  $('#intro-text4').hide()

  textanimation()
  
   function textanimation(){
     if(countText >= TEXT_QUANTITY){
      countText = 1
     } else {
      countText++
     }
    $(`#intro-text${countText}`).removeClass('fade-out-right').show().addClass('fade-in-left')
    setTimeout(function(){
      $(`#intro-text${countText}`).addClass('fade-out-right').removeClass('fade-in-left')
      setTimeout(function(){
        $(`#intro-text${countText}`).hide()
        textanimation()
      }, 800)
    }, DELAY_FUNCTION)
  }
});

/* Slider Proyectos */

var projects = [
  {
    id: "Proyect 1",
    title: "Movistar Comparte",
    quoteTitle: "UX · UI",
    paragraphOne: "Proyecto para todos los medios de difusión en streaming",
    paragraphTwo: "Comparte tu pantalla con un invitado y mirar el contenido juntos",
    buttonRef: "VER PROYECTO",
    currentSlide: "01",
    imgUrl: "./assets/img/portada-comparte.jpg"
  },
  {
    id: "Proyect 2",
    title: "Rediseño ComicCon Madrid",
    quoteTitle: "UX · UI",
    paragraphOne: "Landing page para promocionar el evento ComicCon Madrid 2020",
    paragraphTwo: "",
    buttonRef: "VER PROYECTO",
    currentSlide: "02",
    imgUrl: "./assets/img/portada-comiccon.png"
  },
  {
    id: "Proyect 3",
    title: "GEAº Magazine",
    quoteTitle: "UX · UI",
    paragraphOne: "Una revista digital dirigida a todas las personas que aprecian la cultura, el medio ambiente y la vida sana",
    buttonRef: "VER PROYECTO",
    currentSlide: "03",
    imgUrl: "./assets/img/portada-gea.png"
  },
  {
    id: "Proyect 4",
    title: "Game Camp Online",
    quoteTitle: "UX",
    paragraphOne: "Campamento bilingüe durante las vacaciones de verano, con una temática gaming para vivir una experiencia entretenida y educativa",
    paragraphTwo: "",
    buttonRef: "VER PROYECTO",
    currentSlide: "04",
    imgUrl: "./assets/img/works/portada-gamecamp.jpeg"
  },
  {
    id: "Proyect 5",
    title: "Mi Portfolio, mi imágen",
    quoteTitle: "UI · CODE",
    paragraphOne: "Portfolio web, pensando desde la marca hasta el código. ",
    buttonRef: "VER PROYECTO",
    currentSlide: "05",
    imgUrl: "./assets/img/works/portada-gamecamp.jpeg"
  },
  {
    id: "Proyect 6",
    title: "Starty App",
    quoteTitle: "UX · UI",
    paragraphOne: "Proyecto final del bootcamp de Ironhcak",
    paragraphTwo: "Seleccionado para ir al HackShow del 2019",
    buttonRef: "VER PROYECTO",
    currentSlide: "06",
    imgUrl: "./assets/img/works/portada-gamecamp.jpeg"
  }
]

$( document ).ready(function() {
  var leftArrow = $(".fa-chevron-circle-left")
  var rightArrow = $(".fa-chevron-circle-right")
  var textDiv = $(".trabajos-principal .trabajos-info-izquierda div")
  var currentSlide = 0
  var bullets = document.querySelectorAll(".bullet"); 
  var fadeBox = $(".project-text-fadebox")
  var totalSlides = '0' + projects.length

  for(var i = 0; i < bullets.length; i++){
   bullets[i].addEventListener("click", (e) => incrementIndex(e))
  }

  leftArrow.click(() => changeSlide("left"))
  rightArrow.click(() => changeSlide("right"))

  printSlideContent()

  function incrementIndex(event){ 
    currentSlide = Number(event.target.getAttribute("data-id")) - 1
    toggleFade()
    printSlideContent()
  }

  function printSlideContent () {
    var quoteTitle = textDiv.find(".quote-title-project")
    var title = textDiv.find(".title-project")
    var firstParagraph = textDiv.find(".text-project-one")
    var secondParagraph = textDiv.find(".text-project-two")
    var button = $("#see-project-button")
    var currentTextSlide = $("#current-slide-text")
    var cardGifProject = $(".trabajos-contenido-izquierda")
    var projectsTextTotal = $("#total-slides-count")

    bullets.forEach((bullet, i) => {
      if(i === currentSlide){
        bullet.classList.remove("opacity-50")
      } else {
        bullet.classList.add("opacity-50")
      }
    })

    projectsTextTotal.text(totalSlides)
    cardGifProject.css("background",`url(${projects[currentSlide].imgUrl})`)
    currentTextSlide.text(projects[currentSlide].currentSlide)
    quoteTitle.text(projects[currentSlide].quoteTitle)
    title.text(projects[currentSlide].title)
    firstParagraph.text(projects[currentSlide].paragraphOne)
    secondParagraph.text(projects[currentSlide].paragraphTwo)
    button.attr("href", projects[currentSlide].buttonRef)
  }

  function toggleFade (){
    fadeBox.removeClass("fade-in")
    setTimeout(()=> {
      fadeBox.addClass("fade-in")
    }, 1)
  }

  function changeSlide (side){
    if(side === "left"){
      currentSlide === 0 ? currentSlide = projects.length - 1 : currentSlide--
      toggleFade()
      printSlideContent()
    }
    
    if(side === "right"){
      currentSlide < projects.length - 1 ? currentSlide++ : currentSlide = 0
      toggleFade()
      printSlideContent()
    }
  }


  var activeModalAnchors = $(".open-modal")

  activeModalAnchors.click((e) =>  changeModalContent((e.target)))

  function changeModalContent(target) {
    var ref = target.getAttribute("data-ref")
    var image = target.getAttribute("data-img")
    var modalImage = $(`${ref} #image-modal`)
    modalImage.attr("src", `${image}`)
  }

})