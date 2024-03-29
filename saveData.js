const fs = require('fs');

export const data1  = {
    "bannerArray": [
      {
        "id": "banner1",
        "id_no": 1,
        "text": "This is the first banner area",
        "button": true,
        "btn_typ": "redirect",
        "btn_name": "Banner",
        "link": "/redirect1"
      },
      {
        "id": "banner2",
        "id_no": 2,
        "text": "This is the second banner area",
        "button": true,
        "btn_typ": "redirect",
        "btn_name": "Banner",
        "link": "/redirect2"
      },
      {
        "id": "banner3",
        "id_no": 3,
        "text": "This is the third banner area",
        "button": false
      }
    ],
    "sectionArray": [
      {
        "id": "section 1",
        "sec_no": 1,
        "title": "Section One",
        "cN": "one-section"
      },
      {
        "id": "section2",
        "sec_no": 2,
        "title": "Section Two",
        "cN": "two-section"
      },
      {
        "id": "section3",
        "sec_no": 3,
        "title": "Section Three",
        "cN": "three-section"
      }
    ],
    "cardArray": [
      {
        "id": "card1",
        "cursor": false,
        "parent_sec_no": 1,
        "card_no": 1,
        "parent_sec": "section1",
        "card_title": "Title AA",
        "data": true,
        "data_type": "progress",
        "data_value": 65,
        "button": false,
        "link": true,
        "link_name": "link is here",
        "redirect": "aa"
      },
      {
        "id": "card2",
        "cursor": true,
        "permeant": true,
        "parent_sec": "section1",
        "parent_sec_no": 1,
        "card_no": 2,
        "card_title": "Title AB",
        "data": true,
        "data_type": "number",
        "data_value": 10,
        "button": true,
        "button_name": "Button AB",
        "link": false,
        "redirect": "ab",
        "note": "Note added here"
      },
      {
        "id": "card3",
        "cursor": true,
        "permeant": true,
        "parent_sec": "section1",
        "parent_sec_no": 1,
        "card_no": 3,
        "card_title": "Title AC",
        "data": true,
        "data_type": "number",
        "data_value": 17,
        "button": true,
        "button_name": "Button AC",
        "link": false,
        "redirect": "ac",
        "note": "Note added here"
      },
      {
        "id": "card4",
        "cursor": true,
        "permeant": true,
        "parent_sec": "section2",
        "parent_sec_no": 2,
        "card_no": 4,
        "card_title": "Title BA",
        "data": true,
        "data_type": "number",
        "data_value": 5,
        "button": true,
        "button_name": "Button BA",
        "link": false,
        "redirect": "ba"
      },
      {
        "id": "card5",
        "cursor": false,
        "parent_sec_no": 2,
        "card_no": 5,
        "parent_sec": "section2",
        "card_title": "Title BB",
        "data": true,
        "data_type": "number",
        "data_value": 8,
        "button": false,
        "link": true,
        "link_name": "link is here",
        "redirect": "bb"
      },
      {
        "id": "card6",
        "cursor": true,
        "permeant": true,
        "parent_sec": "section2",
        "parent_sec_no": 2,
        "card_no": 6,
        "card_title": "Title BC",
        "data": true,
        "data_type": "text",
        "data_value": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        "button": true,
        "button_name": "Button BC",
        "link": false,
        "redirect": "bc",
        "note": "Note added here"
      },
      {
        "id": "card7",
        "cursor": true,
        "permeant": true,
        "parent_sec": "section2",
        "parent_sec_no": 2,
        "card_no": 7,
        "card_title": "Title BC",
        "data": true,
        "data_type": "tags",
        "data_value": ["tag1, tag2, TAG3, tags4, tagsr"],
        "button": true,
        "button_name": "Button BC",
        "link": false,
        "redirect": "bc",
        "note": "Note added here"
      },
      {
        "id": "card8",
        "cursor": true,
        "permeant": true,
        "parent_sec": "section2",
        "parent_sec_no": 2,
        "card_no": 8,
        "card_title": "Title BD",
        "data": true,
        "data_type": "text",
        "data_value": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        "button": true,
        "button_name": "Button BD",
        "link": false,
        "redirect": "bd",
        "note": "Note added here"
      },
      {
        "id": "card9",
        "cursor": true,
        "permeant": true,
        "parent_sec": "section2",
        "parent_sec_no": 2,
        "card_no": 9,
        "card_title": "Title BE",
        "button": true,
        "button_name": "Button BE",
        "data": false,
        "link": false,
        "redirect": "be",
        "note": "Note added here"
      },
      {
        "id": "card10",
        "cursor": true,
        "permeant": true,
        "parent_sec": "section3",
        "parent_sec_no": 3,
        "card_no": 10,
        "card_title": "Title CA",
        "button": true,
        "data": true,
        "data_type": "tags",
        "data_value": ["tag1, tag2, TAG3, tags4, tagsr", "tag1, tag2, TAG3, tags4, tagsr"],
        "button_name": "Button CA",
        "link": false,
        "redirect": "ca",
        "note": "Note added here"
      },
      {
        "id": "card11",
        "cursor": true,
        "permeant": true,
        "parent_sec": "section3",
        "parent_sec_no": 3,
        "card_no": 11,
        "card_title": "Title CB",
        "button": true,
        "data": true,
        "data_type": "image",
        "data_value": "https://i.ibb.co/XxstWC6/large-1x-Free-Vector-Halftone-Waves-Backgroundyc0323-generated.jpg",
        "button_name": "Button CB",
        "link": false,
        "redirect": "cb",
        "note": "Note added here"
      },
      {
        "id": "card12",
        "cursor": true,
        "permeant": true,
        "parent_sec": "section3",
        "parent_sec_no": 3,
        "card_no": 12,
        "card_title": "Title CC",
        "button": false,
        "link": false,
        "note": "Note added here"
      },
      {
        "id": "card13",
        "cursor": true,
        "permeant": true,
        "parent_sec": "section3",
        "parent_sec_no": 3,
        "card_no": 13,
        "card_title": "Title CD",
        "data": true,
        "data_type": "number",
        "data_value": 15,
        "note": "Note added here"
      },
      {
        "id": "card14",
        "cursor": false,
        "parent_sec_no": 2,
        "card_no": 14,
        "parent_sec": "section3",
        "card_title": "Title CE",
        "button": false,
        "link": true,
        "data": true,
        "data_type": "number",
        "data_value": 10,
        "link_name": "link is here",
        "redirect": "ce"
      },
      {
        "id": "card15",
        "cursor": true,
        "permeant": true,
        "parent_sec": "section3",
        "parent_sec_no": 3,
        "card_no": 15,
        "card_title": "Title CF",
        "button": true,
        "button_name": "Button CF",
        "link": false,
        "redirect": "cf",
        "note": "Note added here"
      },
      {
        "id": "card16",
        "cursor": true,
        "permeant": true,
        "parent_sec": "section3",
        "parent_sec_no": 3,
        "card_no": 16,
        "card_title": "Title CG",
        "button": true,
        "button_name": "Button CG",
        "link": false,
        "redirect": "cg",
        "note": "Note added here"
      }
    ],
  };
  
// Convert the data to a JSON string
const data = JSON.stringify(data1, null, 2);

// Write the JSON data to a file named 'data.json'
fs.writeFileSync('data.json', data);

console.log('Data saved to data.json');