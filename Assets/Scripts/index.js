window.onload = function() {

    let generate = document.getElementById("generate-button");
    let nameField = document.getElementById("name");
    let maleButton = document.getElementById("male");
    let femaleButton = document.getElementById("female");
    let prefixBlock = document.getElementById("prefix-block");
    let suffixBlock = document.getElementById("suffix-block");
    let prefixFieldMeaning = document.getElementById("prefix-meaning-option-text");
    let suffixFieldMeaning = document.getElementById("suffix-meaning-option-text");
    let cancel = document.getElementById("clear-button");

    let frontMale = {
        names: [    "á", "ælf", "æðel", "beald", "beorht", "beorn", "brun","cén", "ceol", "cuþ", "cyne", "deór", "dun", "ead", "eal", "ealh", "eald",
                    "ecg", "eofor", "eoh", "eorcan", "engel", "frið", "glæd", "god", "grim", "guþ", "here", "hild", "hroð", "léof", "óht", "ós", "ric",
                    "sæ", "sige", "stíþ", "sunu", "swiþ", "þunor", "þeod", "þegen", "wald", "wæl", "wað", "weald", "wig", "wil", "wine", "wulf", "wyn"],
        meanings: [ "Eternal", "Elven", "Noble", "Bold", "Bright", "Warrior", "Brown", "Bold", "Ship", "Renowned", "Brave", "Dear", "Dark", "Rich",
                    "All", "Temple", "Old", "Blade", "Boar", "Horse", "Pure", "Anglian", "Peaceful", "Gleaming", "Good", "Fierce", "Combat", "Army",
                    "Battle", "Famous", "Beloved", "Fearsome", "Divine", "Power", "Sea", "Victorious", "Hard", "Son's", "Strong", "Thor's", "People's",
                    "Thane's", "Forest", "Slaughter", "Hunt", "Powerful", "Warlike", "Desired", "Friendly", "Wolf", "Joyous"],
        runic: [    "ᚪ", "ᚫᛚᚠ", "ᚫᚦᛖᛚ", "ᛒᛠᛚᛞ", "ᛒᛇᚱᚻᛏ", "ᛒᛇᚱᚾ", "ᛒᚱᚢᚾ", "ᚳᛖᚾ", "ᚳᛇᛚ", "ᚳᚢᚦ", "ᚳᚣᚾᛖ", "ᛞᛇᚱ", "ᛞᚢᚾ", "ᛠᛞ", "ᛠᛚ", "ᛠᛚᚻ", "ᛠᛚᛞ",
                    "ᛖᚳᚷ", "ᛇᚠᚩᚱ", "ᛇᚻ", "ᛇᚱᚳᚪᚾ", "ᛖᛝᛖᛚ", "ᚠᚱᛁᚦ", "ᚷᛚᚫᛞ", "ᚷᚩᛞ", "ᚷᚱᛁᛗ", "ᚷᚢᚦ", "ᚻᛖᚱᛖ", "ᚻᛁᛚᛞ", "ᚻᚱᚩᚦ", "ᛚᛇᚠ", "ᚩᚻᛏ", "ᚩᛋ", "ᚱᛁᚳ",
                    "ᛋᚫ", "ᛋᛁᚷᛖ", "ᛋᛏᛁᚦ", "ᛋᚢᚾᚢ", "ᛋᚹᛁᚦ", "ᚦᚢᚾᚩᚱ", "ᚦᛇᛞ", "ᚦᛖᚷᛖᚾ", "ᚹᚪᛚᛞ", "ᚹᚫᛚ", "ᚹᚪᚦ", "ᚹᛠᛚᛞ", "ᚹᛁᚷ", "ᚹᛁᛚ", "ᚹᛁᚾᛖ", "ᚹᚢᛚᚠ", "ᚹᚣᚾ"]
    }
    let frontFemale = {
        names: [    "á", "ælf", "æðel", "beorht", "brun","cén", "ceol", "cuþ", "cwen", "cyne", "deór", "dun", "ead", "eal", "ealh", "eald", "ecg",
                    "eofor", "eoh", "eorcen", "engel", "glæd", "god", "grim", "har", "hild", "hroð", "léof", "mild", "ós", "sæ", "sige", "stíþ", "swiþ",
                    "þunor", "þeod", "þegen", "wald", "wæl", "wað", "weald", "wig", "wil", "wine", "wulf", "wyn"],
        meanings: [ "Eternal", "Elven", "Noble", "Bright", "Brown", "Bold", "Ship", "Renowned", "Queen's", "Brave", "Dear", "Dark", "Rich",
                    "All", "Temple", "Old", "Blade", "Boar", "Horse", "Pure", "Anglian", "Gleaming", "Good", "Fierce", "Army", "Battle", "Famous",
                    "Beloved", "Gentle", "Divine", "Sea", "Victorious", "Hard", "Strong", "Thor", "People's", "Thane's", "Forest", "Slaughter", "Hunt",
                    "Powerful", "War", "Desired", "Friendly", "Wolf", "Joyous"],
        runic: [    "ᚪ", "ᚫᛚᚠ", "ᚫᚦᛖᛚ", "ᛒᛇᚱᚻᛏ", "ᛒᚱᚢᚾ", "ᚳᛖᚾ", "ᚳᛇᛚ", "ᚳᚢᚦ", "ᚳᚹᛖᚾ", "ᚳᚣᚾᛖ", "ᛞᛇᚱ", "ᛞᚢᚾ", "ᛠᛞ", "ᛠᛚ", "ᛠᛚᚻ", "ᛠᛚᛞ", "ᛖᚳᚷ",
                    "ᛇᚠᚩᚱ", "ᛇᚻ", "ᛇᚱᚳᚪᚾ", "ᛖᛝᛖᛚ", "ᚷᛚᚫᛞ", "ᚷᚩᛞ", "ᚷᚱᛁᛗ", "ᚻᚪᚱ", "ᚻᛁᛚᛞ", "ᚻᚱᚩᚦ", "ᛚᛇᚠ", "ᛗᛁᛚᛞ", "ᚩᛋ", "ᛋᚫ", "ᛋᛁᚷᛖ", "ᛋᛏᛁᚦ", "ᛋᚹᛁᚦ",
                    "ᚦᚢᚾᚩᚱ", "ᚦᛇᛞ", "ᚦᛖᚷᛖᚾ", "ᚹᚪᛚᛞ", "ᚹᚫᛚ", "ᚹᚪᚦ", "ᚹᛠᛚᛞ", "ᚹᛁᚷ", "ᚹᛁᛚ", "ᚹᛁᚾᛖ", "ᚹᚢᛚᚠ", "ᚹᚣᚾ"]
    }
    let backMale = {
        names: [    "beald", "behrt", "beorn", "dæg", "frið", "gár", "heah", "heard", "helm", "here", "hún", "láf", "mær", "mund", "noð",
                    "ræd", "ric", "sige", "stán", "þegen", "þunor", "weald", "weard", "wig", "wine", "wulf"],
        meanings: [ "Bold", "Bright", "Warrior", "Day", "Peace", "Spear", "High", "Bravery", "Helmet", "Army", "Young Bear", "Heir", "Fame",
                    "Protector", "Bold", "Counsel", "Power", "Victory", "Stone", "Thane", "Thor", "Power", "Guardian", "War", "Friend", "Wolf"],
        runic: [    "ᛒᛠᛚᛞ", "ᛒᛇᚱᚻᛏ", "ᛒᛇᚱᚾ", "ᛞᚫᚷ", "ᚠᚱᛁᚦ", "ᚷᚪᚱ", "ᚻᛠᚻ", "ᚻᛠᚱᛞ", "ᚻᛖᛚᛗ", "ᚻᛖᚱᛖ", "ᚻᚢᚾ", "ᛚᚪᚠ", "ᛗᚫᚱ", "ᛗᚢᚾᛞ", "ᚾᚩᚦ",
                    "ᚱᚫᛞ", "ᚱᛁᚳ", "ᛋᛁᚷᛖ", "ᛋᛏᚪᚾ", "ᚦᛖᚷᛖᚾ", "ᚦᚢᚾᚩᚱ", "ᚹᛠᛚᛞ", "ᚹᛠᚱᛞ", "ᚹᛁᚷ", "ᚹᛁᚾᛖ", "ᚹᚢᛚᚠ"]
    }
    let backFemale = {
        names: [    "burg", "flæd", "gifu", "gyð", "hild", "swiþ", "þrýð", "wyn"],
        meanings: [ "City", "Beauty", "Gift", "Battle", "Battle", "Strength", "Might", "Joy"],
        runic: [    "ᛒᚢᚱᚷ", "ᚠᛚᚫᛞ", "ᚷᛁᚠᚢ", "ᚷᚣᚦ", "ᚻᛁᛚᛞ", "ᛋᚹᛁᚦ", "ᚦᚱᚣᚦ", "ᚹᚣᚾ"]
    }

    var mfSelected = -1;

    prefixBlock.style.display = "none";
    suffixBlock.style.display = "none";

    cancel.onclick = function() {

        nameField.innerHTML = '<p id="starter">Fill the void</p>';
    }

    male.onclick = function() {

        if (mfSelected !== 1) mfSelected = 1;
        else mfSelected = -1;

        setMenuState();
    }

    female.onclick = function() {

        if (mfSelected !== 0) mfSelected = 0;
        else mfSelected = -1;

        setMenuState();
    }

    function setMenuState() {

        var lengthBack;
        var lengthFront;
        var namesBack;
        var namesFront;
        var meaningsBack;
        var meaningsFront;

        if (mfSelected === -1) {

            prefixBlock.style.display = "none";
            suffixBlock.style.display = "none";
            prefix.innerHTML = "<option value='random'>Random</option>";
            suffix.innerHTML = "<option value='random'>Random</option>";

            female.classList.remove("pressed");
            male.classList.remove("pressed");
        }
        else if (mfSelected === 0) {

            prefixBlock.style.display = "block";
            suffixBlock.style.display = "block";
            prefix.innerHTML = "<option value='random'>Random</option>";
            suffix.innerHTML = "<option value='random'>Random</option>";

            female.classList.add("pressed");
            male.classList.remove("pressed");

            lengthBack = backFemale.names.length;
            lengthFront = frontFemale.names.length;
            namesBack = backFemale.names;
            namesFront = frontFemale.names;
            meaningsBack = backFemale.meanings;
            meaningsFront = frontFemale.meanings;
        }
        else if (mfSelected === 1) {

            prefixBlock.style.display = "block";
            suffixBlock.style.display = "block";
            prefix.innerHTML = "<option value='random'>Random</option>";
            suffix.innerHTML = "<option value='random'>Random</option>";

            female.classList.remove("pressed");
            male.classList.add("pressed");

            lengthBack = backMale.names.length;
            lengthFront = frontMale.names.length;
            namesBack = backMale.names;
            namesFront = frontMale.names;
            meaningsBack = backMale.meanings;
            meaningsFront = frontMale.meanings;
        }

        for (var i = 0 ; i < lengthFront; i++) {

            prefix.innerHTML += "<option value='" + i + "'>"
                + "<p id='prefix-name-option-text'>" +  namesFront[i] + "</p>"
                + "<p id='prefix-meaning-option-text'> (" +  meaningsFront[i] + ")</p>"
                + "</option>";
        }
        for (var i = 0 ; i < lengthBack; i++) {

            suffix.innerHTML += "<option value='" + i + "'>"
                + "<p id='suffix-name-option-text'>" +  namesBack[i] + "</p>"
                + "<p id='suffix-meaning-option-text'> (" +  meaningsBack[i] + ")</p>"
                + "</option>";
        }
    }

    generate.onclick = function() {

        var frontRand;
        var front;
        var backRand;
        var back;
        var name;
        var meaningFront;
        var meaningBack;
        var gender;
        var runic;

        var mf = Math.floor(Math.random() * 2);

        if (mfSelected !== -1) mf = mfSelected;

        if (mf) {

            gender = "<i class='fa fa-mars'></i>";

            frontRand = Math.floor(Math.random() * frontMale.names.length);
            backRand = Math.floor(Math.random() * backMale.names.length);

            while (frontMale.names[frontRand] === backMale.names[backRand])
                backRand = Math.floor(Math.random() * backMale.names.length);

            if (prefix.value !== "random") frontRand = prefix.value;
            if (suffix.value !== "random") backRand = suffix.value;

            front = frontMale.names[frontRand];
            back = backMale.names[backRand];

            name = front.charAt(0).toUpperCase() + front.slice(1) + back;
            meaning = frontMale.meanings[frontRand] + " " + backMale.meanings[backRand];
            runic = frontMale.runic[frontRand] + backMale.runic[backRand];
        }
        else {

            gender = "<i class='fa fa-venus'></i>";

            frontRand = Math.floor(Math.random() * frontFemale.names.length);
            backRand = Math.floor(Math.random() * backFemale.names.length);

            while (frontFemale.names[frontRand] === backFemale.names[backRand])
                backRand = Math.floor(Math.random() * backFemale.names.length);

            if (prefix.value !== "random") frontRand = prefix.value;
            if (suffix.value !== "random") backRand = suffix.value;

            front = frontFemale.names[frontRand];
            back = backFemale.names[backRand];

            name = front.charAt(0).toUpperCase() + front.slice(1) + back;
            meaning = frontFemale.meanings[frontRand] + " " + backFemale.meanings[backRand];
            runic = frontFemale.runic[frontRand] + backFemale.runic[backRand];
        }

        starter.innerHTML = "";
        nameField.innerHTML = "<div id='name-text'>" + name + "</div>" + "<br>"
                                + gender + " " + meaning + "<br>"
                                + "Runic form: " + runic
                                + modernForm(name) + "<br>"
                                + nameField.innerHTML;
    }

    function modernForm(name) {

        if (name === "Hroðbehrt") return "<br>Modern form: \"Robert/Rupert\"";
        else if (name === "Eadweard") return "<br>Modern form: \"Edward\"";
        else if (name === "Eadmund") return "<br>Modern form: \"Edmund\"";
        else if (name === "Ælfræd") return "<br>Modern form: \"Alfred\"";
        else if (name === "Eadgyð") return "<br>Modern form: \"Edith\"";
        else if (name === "Æðelbehrt") return "<br>Modern form: \"Albert\"";
        else if (name === "Ósweald") return "<br>Modern form: \"Oswald\"";
        else if (name === "Ósmund") return "<br>Modern form: \"Osmond\"";
        else if (name === "Eadwine") return "<br>Modern form: \"Edwin\"";
        else if (name === "Eadgár") return "<br>Modern form: \"Edgar\"";
        else if (name === "Eadwine") return "<br>Modern form: \"Edwin\"";
        else if (name === "Hereweald") return "<br>Modern form: \"Harold\"";
        else if (name === "Æðelþrýð") return "<br>Modern form: \"Audrey\"";
        else if (name === "Gárþrýð") return "<br>Modern form: \"Gertrude\"";
        else if (name === "Wilfrið") return "<br>Modern form: \"Wilfred\"";
        else if (name === "Guþhere") return "<br>Modern form: \"Gunther\"";
        else if (name === "Mildræd") return "<br>Modern form: \"Mildred\"";
        else if (name === "Ósgár") return "<br>Modern form: \"Oscar\"";
        else if (name === "Wilhelm") return "<br>Modern form: \"William\"";
        else if (name === "Hroðwulf") return "<br>Modern form: \"Rudolf\"";
        else if (name === "Æðelwulf") return "<br>Modern form: \"Adolf\"";
        else if (name === "Godgifu") return "<br>Modern form: \"Godiva\"";
        else if (name === "Eoforheard") return "<br>Modern form: \"Everett\"";
        else if (name === "Richeard") return "<br>Modern form: \"Richard\"";
        else if (name === "Beornheard") return "<br>Modern form: \"Bernard\"";
        else if (name === "Bealdwine") return "<br>Modern form: \"Baldwin\"";
        else if (name === "Godwine") return "<br>Modern form: \"Godwin\"";
        else if (name === "Deórwine") return "<br>Modern form: \"Darwin\"";
        else if (name === "Herewine") return "<br>Modern form: \"Erwin\"";
        else if (name === "Þeodbeald") return "<br>Modern form: \"Theobald\"";
        else if (name === "Áric") return "<br>Modern form: \"Eric\"";
        else if (name === "Áláf") return "<br>Modern form: \"Olaf\"";
        else if (name === "Friðric") return "<br>Modern form: \"Fredrick\"";
        else if (name === "Hroðgár") return "<br>Modern form: \"Roger\"";
        else if (name === "Friðnoð") return "<br>Modern form: \"Ferdinand\"";
        else if (name === "Þeodric") return "<br>Modern form: \"Dereck\"";
        else if (name === "Eorcanbeald") return "<br>Modern form: \"Archibald\"";
        else if (name === "Winestán") return "<br>Modern form: \"Winston\"";
        else return "";
    }
}
