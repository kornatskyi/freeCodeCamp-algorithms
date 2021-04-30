/**
 * 
Convert HTML Entities
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
 */

function convertHTML(string) {
    let str = string
    const regex1 = /([&])/g;
    const regex2 = /([<])/g;
    const regex3 = /([>])/g;
    const regex4 = /(["])/g;
    const regex5 = /(['])/g;
     str = str.replace(regex1, '&amp;')
     str = str.replace(regex2, '&lt;')
     str = str.replace(regex3, '&gt;')
     str = str.replace(regex4, '&quot;')
     str = str.replace(regex5, '&apos;')
    return str;
  }
  
  console.log(convertHTML("Hamburgers < Pizza < Tacos"));