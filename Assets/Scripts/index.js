window.onload = function() {

    let generate = document.getElementById("generate-button");
    let nameField = document.getElementById("name");
    let maleButton = document.getElementById("male");
    let femaleButton = document.getElementById("female");
    let prefixBlock = document.getElementById("prefix-block");
    let suffixBlock = document.getElementById("suffix-block");
    let prefixFieldMeaning = document.getElementById("prefix-meaning-option-text");
    let suffixFieldMeaning = document.getElementById("suffix-meaning-option-text");

    let frontMale = {
        names: [    "á", "ælf", "æðel", "beald", "beorht", "beorn", "brun","cén", "ceol", "cuþ", "cyne", "deór", "dun", "ead", "eal", "ealh", "eald",
                    "ecg", "eofor", "engel", "glæd", "god", "grim", "guþ", "here", "hild", "hroð", "léof", "óht", "ós", "ric", "sæ", "sige", "stíþ",
                    "sunu", "swiþ", "þúr", "þeod", "wað", "weald", "wig", "wil", "wine", "wulf", "wyn"],
        meanings: [ "Eternal", "Elven", "Noble", "Bold", "Bright", "Warrior", "Brown", "Bold", "Ship", "Renowned", "Brave", "Dear", "Dark", "Rich",
                    "All", "Temple", "Old", "Blade", "Boar", "Anglian", "Gleaming", "Good", "Fierce", "Combat", "Army", "Battle", "Famous", "Beloved",
                    "Fearsome", "Divine", "Power", "Sea", "Victorious", "Hard", "Son's", "Strong", "Thor's", "People's", "Hunt", "Powerful", "Warlike",
                    "Wiley", "Friendly", "Wolf", "Joyous"]
    }
    let frontFemale = {
        names: [    "á", "ælf", "æðel", "beorht", "brun","cén", "ceol", "cuþ", "cwen", "cyne", "deór", "dun", "ead", "eal", "ealh", "eald", "ecg",
                    "eofor", "engel", "glæd", "god", "grim", "har", "hild", "hroð", "léof", "mild", "ós", "sæ", "sige", "stíþ", "swiþ",
                    "þúr", "þeod", "wað", "weald", "wig", "wil", "wine", "wulf", "wyn"],
        meanings: [ "Eternal", "Elven", "Noble", "Bright", "Brown", "Bold", "Ship", "Renowned", "Queen's", "Brave", "Dear", "Dark", "Rich",
                    "All", "Temple", "Old", "Blade", "Boar", "Anglian", "Gleaming", "Good", "Fierce", "Army", "Battle", "Famous", "Beloved", "Gentle",
                    "Divine", "Sea", "Victorious", "Hard", "Strong", "Thor", "People's", "Hunt", "Powerful", "War", "Wiley", "Friendly",
                    "Wolf", "Joyous"]
    }
    let backMale = {
        names: [    "beald", "behrt", "beorn", "dæg", "frið", "gár", "heah", "heard", "helm", "here", "hún", "láf", "mær", "mund", "noð",
                    "ræd", "ric", "sige", "stán", "þúr", "weald", "weard", "wig", "wine", "wulf"],
        meanings: [ "Bold", "Bright", "Warrior", "Day", "Peace", "Spear", "High", "Bravery", "Helmet", "Army", "Young Bear", "Heir", "Fame",
                    "Protector", "Bold", "Counsel", "Power", "Victory", "Stone", "Thor", "Power", "Guardian", "War", "Friend", "Wolf"]
    }
    let backFemale = {
        names: [    "burg", "flæd", "gifu", "gyð", "hild", "swiþ", "þrýð", "wyn"],
        meanings: [ "City", "Beauty", "Gift", "Battle", "Battle", "Strength", "Might", "Joy"]
    }

    var mfSelected = -1;

    prefixBlock.style.display = "none";
    suffixBlock.style.display = "none";

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

        var mf = Math.floor(Math.random() * 2);

        if (mfSelected !== -1) mf = mfSelected;

        if (mf) {

            gender = "(m)";

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
        }
        else {

            gender = "(f)";

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
        }

        starter.innerHTML = "";
        nameField.innerHTML = "<div id='name-text'>" + name + "</div> (" + meaning + ") " + gender + modernForm(name) + "<br>" + nameField.innerHTML;
    }

    function modernForm(name) {

        if (name === "Hroðbehrt") return " Modern form: \"Robert/Rupert\"";
        else if (name === "Eadweard") return " Modern form: \"Edward\"";
        else if (name === "Eadmund") return " Modern form: \"Edmund\"";
        else if (name === "Ælfræd") return " Modern form: \"Alfred\"";
        else if (name === "Eadgyð") return " Modern form: \"Edith\"";
        else if (name === "Ælfbehrt") return " Modern form: \"Albert\"";
        else if (name === "Ósweald") return " Modern form: \"Oswald\"";
        else if (name === "Ósmund") return " Modern form: \"Osmond\"";
        else if (name === "Eadwine") return " Modern form: \"Edwin\"";
        else if (name === "Eadgár") return " Modern form: \"Edgar\"";
        else if (name === "Hereweald") return " Modern form: \"Harold\"";
        else if (name === "Æðelþrýð") return " Modern form: \"Audrey\"";
        else if (name === "Wilfrið") return " Modern form: \"Wilfred\"";
        else if (name === "Guþhere") return " Modern form: \"Gunther\"";
        else if (name === "Mildræd") return " Modern form: \"Mildred\"";
        else if (name === "Ósgár") return " Modern form: \"Oscar\"";
        else if (name === "Wilhelm") return " Modern form: \"William\"";
        else if (name === "Hroðwulf") return " Modern form: \"Rudolf\"";
        else if (name === "Æðelwulf") return " Modern form: \"Adolf\"";
        else if (name === "Godgifu") return " Modern form: \"Godiva\"";
        else if (name === "Eoforheard") return " Modern form: \"Everett\"";
        else if (name === "Richeard") return " Modern form: \"Richard\"";
        else if (name === "Beornheard") return " Modern form: \"Bernard\"";
        else if (name === "Bealdwine") return " Modern form: \"Baldwin\"";
        else if (name === "Bealdwine") return " Modern form: \"Baldwin\"";
        else if (name === "Þeodbeald") return " Modern form: \"Theobald\"";
        else if (name === "Áric") return " Modern form: \"Eric\"";
        else return "";
    }
}
