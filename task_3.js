let styleslist = 
[{name: "font-size", value: "130px"},
{name: "color", value: "tomato"}, 
{name: "background-color", value: "black"}, 
{name: "text-decoration", value: "underline"}, 
{name: "text-align", value: "center"}, 
{name: "font-weight", value: "300"}, 
{name: "font-style", value: "italic"},
{name: "font-family", value: "Montserrat"},]



function ShowStyles(text, array) {
    let style = "";
    array.forEach(e =>{
        style += `${e.name}:${e.value};`;
    });
    document.open();
    document.write(`<p style="${style}">${text}</p>`);
    document.close();
  }

  ShowStyles("lorem ipsum", styleslist);