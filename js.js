//===========================================================
//                  DEFINING VARIABLES
//===========================================================
let textArea = $("#main_text_area")
let fontFamilySelect = $("#font_family_select")
let fontFamilies = ["Sans-Serif","Monospace","Fantasy","Serif"]
let fontSizeSelect = $("#font_size_select")
let fontSizes = [8,10,12,14,16,20,22,24,26,28,34,40,44,50,60,72,84]
let incrementValue = fontSizes.indexOf(16)
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
    for(let i = 0; i < fontSizes.length; i++){
        let fontSizeSelectOptions = $(`<option value=${fontSizes[i]}>${fontSizes[i]}px</option>`)
        if(fontSizes[i] === 16) fontSizeSelectOptions.attr("selected","selected")
        fontSizeSelect.append(fontSizeSelectOptions)
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
function fontSizeSelectChanged(){
    textArea.css("fontSize",`${fontSizeSelect.val()}px`)
}

function fontFamilySelectChanged(){
    textArea.css("fontFamily",`${fontFamilySelect.val()}`)
}

function increasingFontSize(){
    if(incrementValue === fontSizes.length - 1){
        textArea.focus()
        return
    }
    fontSizeSelect.val(fontSizes[++incrementValue])
    textArea.css("fontSize",`${fontSizes[incrementValue]}px`)
    textArea.focus()
}

function decreasingFontSize(){
    if(incrementValue === 0){
        textArea.focus()
        return
    }
    fontSizeSelect.val(fontSizes[--incrementValue])
    textArea.css("fontSize",`${fontSizes[incrementValue]}px`)
    textArea.focus()
}

function makingBold(){
    textArea.focus()
    $(this).toggleClass("selected")
    $(this).hasClass("selected") ? textArea.css("fontWeight","bolder") : textArea.css("fontWeight","100")
}

function makingItalic(){
    textArea.focus()
    $(this).toggleClass("selected")
    $(this).hasClass("selected") ? textArea.css("fontStyle","italic") : textArea.css("fontStyle","normal")
}

function makingUnderlined(){
    textArea.focus()
    $("#deleted").removeClass("selected")
    $(this).toggleClass("selected")
    $(this).hasClass("selected") ? textArea.css("textDecoration","underline") : textArea.css("textDecoration","none")
}

function makingDeleted(){
    textArea.focus()
    $("#underline").removeClass("selected")
    $(this).toggleClass("selected")
    $(this).hasClass("selected") ? textArea.css("textDecoration","line-through") : textArea.css("textDecoration","none")
}

function makingSuperscripted(){
    textArea.focus()
    $(this).toggleClass("selected")
    let currentText = textArea.val()
    if($(this).hasClass("selected")) textArea.html(`asd<sup>${currentText}</sup>`);
    else $("<sup></sup>").remove()
}

function makingSubscripted(){
    textArea.focus()
    $(this).toggleClass("selected")
    let currentText = textArea.val()
    if($(this).hasClass("selected")) textArea.html(`<sub>${currentText}</sub>`);
    else $("<sub></sub>").remove()
}

function caseModifications(){
    textArea.focus()
    textArea.css("textTransform",$("#case_modifications_select").val())
}
//===========================================================
//                  FUNCTION TRIGGERS
//===========================================================
$(document).ready(function(){
    addingFontFamilies()
    addingFontSizes()
    menuButtonsOnLeave()

    // EVENT HANDLERS
    textArea.focus()
    $(".menu_container nav").mouseenter(menuButtonsOnEnter)
    $(".menu_container").mouseleave(menuButtonsOnLeave)
    fontFamilySelect.change(fontFamilySelectChanged)
    fontSizeSelect.change(fontSizeSelectChanged)
    $("#plusing_font_size").click(increasingFontSize)
    $("#minusing_font_size").click(decreasingFontSize)
    $("#bold").click(makingBold)
    $("#italic").click(makingItalic)
    $("#underline").click(makingUnderlined)
    $("#deleted").click(makingDeleted)
    $("#superscript_btn").click(makingSuperscripted)
    $("#subscript_btn").click(makingSubscripted)
    $("#case_modifications_select").change(caseModifications)
})
