//===========================================================
//                  DEFINING VARIABLES
//===========================================================

let fontFamilySelect = $("#font_family_select")
let fontFamilies = ["Sans-Serif","Monospace","Fantasy","Serif"]
let fontSizesSelect = $("#font_size_select")
let fontSizes = [8,16,20,22,24,26,28,34,40,44,50,60,72,84]
let incrementValue = 1
let menu_buttons = {clicked:"home"}

//===========================================================
//                  FUNCTIONS
//===========================================================

//===============================
//      MENU FUNCTIONALITY
//===============================
function addingFontFamilies(){
    for(let i = 0; i < fontFamilies.length; i++){
        let fontFamilySelectOptions = $(`<option value=${fontFamilies[i]}>${fontFamilies[i]}</option>`)
        fontFamilySelect.append(fontFamilySelectOptions)
    }
}

function addingFontSizes(){
    fontSizesSelect.prepend($(`<option value="8">8px</option>`))
    for(let i = 2; i < fontSizes.length; i++){
        let fontSizeSelectOptions = $(`<option value=${fontSizes[i]}>${fontSizes[i]}px</option>`)
        fontSizesSelect.append(fontSizeSelectOptions)
    }
}

function menuButtonsOnEnter(){
    $(".menu_container nav").css({background:"white",color: "black"})
    $(this).css({background:"black",color: "white"})
}

function menuButtonsOnLeave(){
    $(".menu_container nav").css({background:"white",color: "black"})
    $(`#${menu_buttons.clicked}`).css({background:"black",color: "white"})
}
//===============================
//      TOOLS FUNCTIONALITY
//===============================
function increasingFontSize(){
    if(incrementValue === fontSizes.length - 1){
        return
    }
    fontSizesSelect.val(fontSizes[++incrementValue])
}

function decreasingFontSize(){
    if(incrementValue === 0){
        return
    }
    fontSizesSelect.val(fontSizes[--incrementValue])
    console.log(fontSizes[incrementValue])
}

//===========================================================
//                  FUNCTION TRIGGERS
//===========================================================
$(document).ready(function(){
    addingFontFamilies()
    addingFontSizes()
    menuButtonsOnLeave()

    // EVENT HANDLERS
    $()
    $(".menu_container nav").mouseenter(menuButtonsOnEnter)
    $(".menu_container").mouseleave(menuButtonsOnLeave)
    $("#plusing_font_size").click(increasingFontSize)
    $("#minusing_font_size").click(decreasingFontSize)

    


})
