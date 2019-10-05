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
    title: "Títul1",
    quoteTitle: "Título quote proyecto1",
    paragraphOne: "Lorem ipsum dolor  ex ea commodo consequat.",
    paragraphTwo: "Lorem ipsum dolor sit amet, consectetur adipiscin Lorem ipsum olor sit amet, consectetur adipiscin",
    buttonText: "button Text1",
    currentSlide: "01",
    imgUrl: "./assets/img/retrato-escritorio-2.gif"
  },
  {
    id: "Proyect 2",
    title: "Títul2",
    quoteTitle: "Título quote proyecto2",
    paragraphOne: "Lorem ipsum dolor  ex ea commodo consequat.",
    paragraphTwo: "Lorem ipsum dolor sit amet, consectetur adipiscin Lorem ipsum olor sit amet, consectetur adipiscin",
    buttonText: "button Text2",
    currentSlide: "02",
    imgUrl: "./assets/img/prueba-fondo-home.png"
  },
  {
    id: "Proyect 3",
    title: "Títul3",
    quoteTitle: "Título quote proyecto3",
    paragraphOne: "Lorem ipsum dolor  ex ea commodo consequat.",
    paragraphTwo: "Lorem ipsum dolor sit amet, consectetur adipiscin Lorem ipsum olor sit amet, consectetur adipiscin",
    buttonText: "button Text3",
    currentSlide: "03",
    imgUrl: ""
  },
  {
    id: "Proyect 4",
    title: "Títul4",
    quoteTitle: "Título quote proyecto4",
    paragraphOne: "Lorem ipsum dolor  ex ea commodo consequat.",
    paragraphTwo: "Lorem ipsum dolor sit amet, consectetur adipiscin Lorem ipsum olor sit amet, consectetur adipiscin",
    buttonText: "button Text4",
    currentSlide: "04",
    imgUrl: ""
  },
  {
    id: "Proyect 5",
    title: "Títul5",
    quoteTitle: "Título quote proyecto5",
    paragraphOne: "Lorem ipsum dolor  ex ea commodo consequat.",
    paragraphTwo: "Lorem ipsum dolor sit amet, consectetur adipiscin Lorem ipsum olor sit amet, consectetur adipiscin",
    buttonText: "button Text5",
    currentSlide: "05",
    imgUrl: ""
  },
  {
    id: "Proyect 6",
    title: "Títul6",
    quoteTitle: "Título quote proyecto5",
    paragraphOne: "Lorem ipsum dolor  ex ea commodo consequat.",
    paragraphTwo: "Lorem ipsum dolor sit amet, consectetur adipiscin Lorem ipsum olor sit amet, consectetur adipiscin",
    buttonText: "button Text5",
    currentSlide: "06",
    imgUrl: ""
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
    var button = textDiv.find("a p")
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
    button.text(projects[currentSlide].buttonText)
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
    var modalImage = $(`${ref} .project-modal-content > div`)
    modalImage.css("background-color", image ? image : "yellow")
  }

})